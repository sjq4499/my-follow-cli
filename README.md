# CLI (command line interface)

```md
命令行界面(英语: command-line interface, 缩写: CLI)是在图形用户界面得到普及之前使用最为广泛的用户界面，它通常不支持鼠标，用户通过键盘输入指令，计算机接收到指令后，予以执行。也有人称之为字符用户界面(CUI) 。
```

#解释语法
当前文件以什么样的方式去解析

```js
  //写死的 node 环境的路径
  #!/usr/bin/node
  //环境变量中去寻找 nodejs
  #!/usr/bin/env node
```

# process arg

获取命令行参数，返回值是数组，第个参数是 nodejs 环境的路径， 第二个参数是当前执行文件 的路径
