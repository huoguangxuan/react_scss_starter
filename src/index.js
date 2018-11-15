import React from 'react';
import ReactDOM from 'react-dom';
import RouterIndex from './components/router/Router';
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
ReactDOM.render(<LocaleProvider locale={zhCN}><RouterIndex /></LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
