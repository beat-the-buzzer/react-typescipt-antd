import React from 'react';
import ReactDOM from 'react-dom';

import 'antd-mobile/dist/antd-mobile.css';
import './index.css';

import alert from './Alert';
import operation from './Operation';
import prompt from './Prompt';
// import App from './App';
import reportWebVitals from './reportWebVitals';

/* ---alert------ */
// alert('title', 'hello world');

/* ---operation------ */
// function pressCallBack() {
//   alert('title', 'hello world');
// }
// operation([{
//   text: '标位未读',
//   onPress: pressCallBack,
// }, {
//   text: '置顶聊天',
// }]);

/* ---prompt------ */
prompt('标题', '输入你的名字');


// ReactDOM.render(
//   // 包裹<React.StrictMode>
//   // <App />,
//   document.getElementById('root'),
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
