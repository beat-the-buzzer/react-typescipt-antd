import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Portal from './Portal';
import reportWebVitals from './reportWebVitals';

let app: any;
ReactDOM.render(
  // 包裹<React.StrictMode>
  // <App ref={node => app = node} />,
  <Portal/>,
  document.getElementById('root'),
  () => {
    setTimeout(() => {
      // document.querySelector('#root') 的值可能是一个 DOM 元素 也可能是 null，但是我呢自己清楚root元素已经在html里面写了 这里使用as
      // ReactDOM.unmountComponentAtNode(document.querySelector('#root') as HTMLElement); // 这种方式会执行组件的componentWillUnmount生命周期
      // (document.querySelector('#root') as HTMLElement).remove();
    }, 3000)
    // console.log(app);
    // app.componentWillUnmount();
    // console.log(ReactDOM.findDOMNode(app)); // 严格模式下 不允许使用findDOMNode
  } // 挂载成功之后的回调
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
