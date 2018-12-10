## 生命周期

```
ReactDOM.render(
 <Header />,
  document.getElementById('root')
)
```

会被编译成:
```
ReactDOM.render(
  React.createElement(Header, null),
  document.getElementById('root')
)
```
其实我们把 Header 组件传给了 React.createElement 函数，又把函数返回结果传给了 ReactDOM.render。我们可以简单猜想一下它们会干什么事
```
/ React.createElement 中实例化一个 Header

const header = new Header(props, children)

// React.createElement 中调用 header.render 方法渲染组件的内容

const headerJsxObject = header.render()

// ReactDOM 用渲染后的 JavaScript 对象来来构建真正的 DOM 元素

const headerDOM = createDOMFromObject(headerJsxObject)
// ReactDOM 把 DOM 元素塞到页面上

document.getElementById('root').appendChild(headerDOM)

```

> 我们把 React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载（这个定义请好好记住）。其实 React.js 内部对待每个组件都有这么一个过程，也就是初始化组件 -> 挂载到页面上的过程。所以你可以理解一个组件的方法调用是这么一个过程

1. componentWillMount：组件挂载开始之前，也就是在组件调用 render 方法之前调用。
2. componentDidMount：组件挂载完成以后，也就是 DOM 元素已经插入页面后调用。
3. componentWillUnmount：组件对应的 DOM 元素从页面中删除之前调用。

