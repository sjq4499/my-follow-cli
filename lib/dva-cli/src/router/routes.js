import Home from '../containers/Home/Home';
import My from '../containers/My/My';
import Main from '../containers/Main/Main';

export default [{
        path: '/home',
        component: Home
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/main',
        component: Main
    },
    {
        path: '/',
        redirect: '/home'
    }
];