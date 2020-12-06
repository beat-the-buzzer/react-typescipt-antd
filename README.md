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

1. 可以引用antd-mobile内部的一些文件

2. PropType.d.ts也可以引用，进行类型检测

3. 解决iOS中滚动穿透的问题：

官方处理方法，无法处理 iPhone 手机的问题
```js
function onWrapTouchStart(e: React.TouchEvent<HTMLDivElement>) {
  if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
    return;
  }
  const pNode = closest(e.target as Element, `.${prefixCls}-footer`);
  if (!pNode) {
    e.preventDefault();
  }
}
```

其他方式
```js
// 解决滚动穿透
const stopMove = (e: TouchEvent) => {
  e.preventDefault();
}
// 打开弹窗的时候 阻止body的默认事件
document.body.addEventListener('touchmove', stopMove, {passive: false});

// 关闭弹窗的时候，移除之歌事件
document.body.removeEventListener('touchmove', stopMove);
```

### Operation

### Prompt

弹窗弹出的时候，可以让输入框自动得到焦点

```tsx
// 弹出之后，直接使得输入框得到焦点
const focusInput = (input: HTMLInputElement) => setTimeout(() => input.focus(), 500);
<input ref={node => focusInput(node as HTMLInputElement)} type="text"/ >
```
