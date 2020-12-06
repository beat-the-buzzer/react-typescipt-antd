## React + TypeScript 实现 Antd组件

### TS的配置

```shell
npm install -g typescript ## 全局安装TS
tsc --init ## 生成了一个tsconfig.json文件
```

重要配置讲解：

1. strictNullChecks

2. moduleResolution

3. [jsx](tslang.cn/docs/handbook/jsx.html)

4. esModuleInterop

5. noImplicitAny

6. target

### 泛型介绍

 - 泛型

 - 泛型接口

 - 泛型类

 - 泛型约束

### ReactDOM的使用

React Dom / React Native

```shell
npm intall -g create-react-app
create-react-app [my-app] --template typescript --use-npm
```

[ReactDom文档](https://zh-hans.reactjs.org/docs/react-dom.html)

1. render函数的渲染机制

Stack => Fiber 

更新频率

[https://github.com/claudiopro/react-fiber-vs-stack-demo](https://github.com/claudiopro/react-fiber-vs-stack-demo)

 - render()

 - componentWillUnmount()

 - findDOMNode()

 - createPortal()

### Antd组件的开发

1. [rmc-feedback](https://react-component.github.io/m-feedback/)

所有能够响应触屏操作的元素在触屏后都应该有一个视觉上的反馈，这就是为什么web应用不够“原生”

```jsx
/* eslint-disable no-console */
/* tslint:disable:no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import TouchFeedback from 'rmc-feedback';
import './simple.less';

const TouchFeedbackDemo = () => (
  <TouchFeedback activeClassName="active" activeStyle={{ color: 'red' }}>
    <div className="normal" style={{
      backgroundColor: 'yellow',
    }}
    onClick={() => console.log('click div')}>click to active</div>
  </TouchFeedback>
);

ReactDOM.render(
  <div style={{ marginBottom: 12 }}>
    <TouchFeedbackDemo />
  </div>,
  document.getElementById('__react-content'),
);
```

2. [rmc-dialog](https://react-component.github.io/m-dialog/)

3. [classnames](https://github.com/JedWatson/classnames)

```js
classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
```

### Alert弹窗