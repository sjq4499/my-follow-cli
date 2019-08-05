#!/usr/bin/env node

const program = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
//获取当前版本号
const version = require('../package.json').version;

//判断文件是否存在
const projectExist = projectPath => {
    // console.log(projectPath, 'projectPath');
    return fs.existsSync(projectPath);
};

//拷贝
const copy = (tragetPath, sourcePath) => {
    // console.log(tragetPath, sourcePath, '1111111111111');
    if (!projectExist(tragetPath)) {
        fs.mkdirSync(tragetPath);
    }
    fs.readdir(sourcePath, (error, files) => {
        if (error) return console.error(error);
        files.forEach(file => {
            const filepath = path.join(sourcePath, file);
            const writepath = path.join(tragetPath, file);
            fs.stat(filepath, (error, stats) => {
                if (error) return console.error(error);
                if (stats.isFile()) {
                    fs.readFile(filepath, (error, buffer) => {
                        if (error) return console.error(error);
                        fs.writeFile(writepath, buffer, error => {
                            if (error) return console.error(error);
                        });
                    });
                } else {
                    copy(writepath, filepath);
                }
            });
        });
    });
};
const promptList = [
    // 具体交互内容
    {
        name: 'name',
        type: 'input',
        message: 'Project name'
    },
    {
        name: 'type',
        type: 'list',
        message: 'Project type',
        choices: ['vue', 'react', 'dva']
    },
    {
        name: 'install',
        type: 'list',
        message: 'install dependences',
        choices: ['npm', 'cnpm', 'yarn']
    }
];

const initAction = () => {
    inquirer.prompt(promptList).then(answers => {
        console.log(answers);
        const projectname = `lib/${answers.type}-cli`; //要拷贝的文件
        const tragetPath = path.join(process.cwd(), answers.name); //要考到的路径
        const sourcePath = path.join(__dirname, '..', projectname); //要拷贝文件的路径
        const installType = `${answers.install}.cmd`;
        copy(tragetPath, sourcePath);
        const installaction = spawn(installType, ['install'], {
            stdio: 'inherit',
            cwd: tragetPath
        });
        installaction.stdout.on('data', data => {
            process.stdout.write(`${data}`);
        });
        installaction.stderr.on('data', data => {
            process.stdout.write(`${data}`);
        });
        installaction.on('close', code => {
            console.log(`子进程退出，退出码${code}`);
        });
    });
};

program
    .version(version)
    .command('init')
    .description('初始化项目')
    .action(initAction);

// program.on('--help', function() {
//     console.log('');
//     console.log('Examples:');
//     console.log('  $ custom-help --help');
//     console.log('  $ custom-help -h');
// });
program.parse(process.argv);