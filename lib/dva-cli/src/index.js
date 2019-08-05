import dva from 'dva';
import App from './App.jsx';
import './index.css';

let app = dva();

app.router(App);
app.start('#root');