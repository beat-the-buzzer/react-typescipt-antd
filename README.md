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