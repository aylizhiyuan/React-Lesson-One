# React-Lesson-One

react写法曾经一度让我很痛苦，并不像vue一样的让人很容易接受，但是，作为react的开发者，它的优势是巨大的，所以，我们要尽量的熟悉它的思想和它的工作原理


### 1.  第一步永远是引入react.js以及react-dom.js两个文件

            <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

### 2. 想比较vue的启动 new vue ({el:"#app"}),react的启动则是另外一个样子

        ReactDOM.render(
            "hello world",
            document.getElementById('root');
        )

其实你可以想象一下，它做了什么？当浏览器解析完html之后(这其实意味着我们的代码都必须是在load事件触发后执行的)，react开始遍历DOM树，首先找到挂载react的节点，render方法恰好将我们的组件或者是字符串转化为DOM后，插入到挂载的节点上去

### 3. 用js写html --- jsx,这是虚拟DOM的别称

> Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用

        const element = (
            <div>
                <h1>hello world</h1>
                <h2>It is {new Date()}</h2>
            </div>
        )
        ReactDOM.render(element,document.querySelector("#app"))

注意点1，它是包在一个括号里面的
注意点2，它是跟写html代码一样的
注意点3，如果输出js代码，那么需要写{} ,Vue里面是{{}}

> 组件化的思想，我们会把整个页面看做是一个个的组件，我们用组件封装我们的页面的不同部分，达到复用和灵活变化的目的.组件中就是我们平时的Html页面和我们要输出的数据

react中的组件是用jsx语法写的，非常的灵活，这种语法刚开始看的时候感觉很奇怪，后期看明白后其实也适应了，vue中是没有类似的语法的，好在.vue这种后缀的文件弥补了这样的差异化，使得我们可以在里面很方便的定义html/css/javascript

        function welcome(props){
            return <h1>hello ,{props.name}</h1>
        }
        const element = <Welcome name="lzy"/>
        ReactDOM.render(element,docuemnt.querySelector("#root"))

### 4. 创建组件

vue中创建组件是直接声明一个.vue文件即可,在export default中声明自己的js代码,template中写自己的HTML

react中不同，它依然是声明一个.js文件，通过class声明，在render方法中写自己的html(用jsx语法)

            //引入文件
            import React,{Component} from 'react'
            //引入其他的文件
            import CommentList from './CommentList'
            //我们的组件代码
            class CommentApp extends Component {
                constructor(props){
                    super(props);
                    //如果组件有传值的话，就通过prop传递到父类的构造函数中
                    this.state = {
                        //里面写我们的数据
                    }
                }
                //这里写我们的方法
                handleComment(){

                }
                render(){
                    //这里写我们的jsx语法即可
                    return (
                        <div></div>
                    )
                }
            }
            export default CommentApp

### 5. 组件的生命周期

组件可能在很多情况下会发生一些变化，这时候我们需要一些钩子函数，在组件发生变化的时候触发，这在很多情况下都是必要的，所以，任何一个MVVM的成熟框架都会需要一个生命周期的维护

- Mounting:已插入真实DOM
- Updating:正在被重新渲染
- Unmounting:已移除真实DOM

生命周期的方法:

1. 挂载

- constructor()
- static getDerivedStateFromProps() 不常用
- render()
- componentDidMount()

2. 更新

- static getDerivedStateFromProps() 不常用
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate() 不常用
- componentDidUpdate() 

3. 卸载

- componentWillUnmount()

4. 错误处理

- static getDerivedStateFromError()
- componentDidCatch()

看一个例子分析一下生命周期的过程

            class Clock extends React.Component {
            constructor(props) {
                super(props);
                this.state = {date: new Date()};
            }

            componentDidMount() {
                this.timerID = setInterval(
                () => this.tick(),
                1000
                );
            }

            componentWillUnmount() {
                clearInterval(this.timerID);
            }

            tick() {
                this.setState({
                date: new Date()
                });
            }

            render() {
                return (
                <div>
                    <h1>Hello, world!</h1>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>
                );
            }
            }

            ReactDOM.render(
            <Clock />,
            document.getElementById('root')
            );

- 当 <Clock /> 被传给 ReactDOM.render()的时候，React 会调用 Clock 组件的构造函数。因为 Clock 需要显示当前的时间，所以它会用一个包含当前时间的对象来初始化 this.state。我们会在之后更新 state。

- 之后 React 会调用组件的 render() 方法。这就是 React 确定该在页面上展示什么的方式。然后 React 更新 DOM 来匹配 Clock 渲染的输出。

- 当 Clock 的输出被插入到 DOM 中后，React 就会调用 ComponentDidMount() 生命周期方法。在这个方法中，Clock 组件向浏览器请求设置一个计时器来每秒调用一次组件的 tick() 方法。

- 浏览器每秒都会调用一次 tick() 方法。 在这方法之中，Clock 组件会通过调用 setState() 来计划进行一次 UI 更新。得益于 setState() 的调用，React 能够知道 state 已经改变了，然后会重新调用 render() 方法来确定页面上该显示什么。这一次，render() 方法中的 this.state.date 就不一样了，如此以来就会渲染输出更新过的时间。React 也会相应的更新 DOM。

- 一旦 Clock 组件从 DOM 中被移除，React 就会调用 componentWillUnmount() 生命周期方法，这样计时器就停止了。

> 需要注意的是setState是异步的更新,如果你更新完毕后想直接使用这个值的话可能会遇到问题，所以不要依赖于这个值去更新别的状态，可以使用函数而不是对象的形式更新

组件可以选择把它的state作为Props向下传递给他的子组件

        <FormattedDate date={this.state.date}>

FormattedDate组件会在其props中接受参数date

        function FormattedDate(props) {
            return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
        }

### 6. 事件处理

- react事件的命名采用小驼峰式，而不是纯小写
- 使用jsx语法的时候你需要传递一个函数作为事件处理函数，而不是一个字符串

这可能是vue的优势把,各种各样的指令@click,@mouseover,等等这些，react里面是onClick,onMouseover这些....

我感觉这个是个槽点，在vue中是不需要绑定this的，你会发现，react在处理事件的时候有时候需要改变数据，这时候this的指向就很尴尬，所以，写法就变成了这样的了

        <button onClick={()=>{this.setColor()}}> //这种是用箭头函数，不绑定this
        <button onClick={this.setColor().bind(this)}> //这种是绑定this的情况
        //以上都是为了让处理函数中的this指向react
        setColor = (value)=>{
            this.setState(color=>({
                color:value
            }))
        }

> 此语法问题在于每次渲染组件的时候都会创建不同的回调函数，但是如果该回调函数作为作为prop传入子组件的时候，会导致额外的渲染



### 7. 条件渲染

直接在里面写就行了，感觉js可以任意的写在html中
如果要在Html中输出js的话，那么直接用{}就行了
如果需要加条件判断的话，直接写就完了,另外，组件或者html是可以直接赋值给变量的

            if(isLoggedIn){
                button = <LogoutButton onClick={this.handleLogoutClick}/>
            }else{
                button = <LoginButton onClick={this.handleLoginClick}/>
            }

### 8. 循环渲染

反正浓浓的js风格，其实这样感觉灵活度更高一些

        const listItems = numbers.map((number)=>
            <li key={number.toString()}>{number}</li>
        )
        return (
            <ul>{listItems}</ul>
        )

### 9. 数据双向绑定 
![](https://user-images.githubusercontent.com/9583120/31386983-622b714a-ad8e-11e7-97c7-02204e7a388f.png)


        <input type="text" value={this.state.value} @onChange={this.handleChange}>

        //值
        this.state = {value:""}
        //函数
        this.handleChange(e){
            this.setState({value:e.target.value})
        }

我们理解数据双向绑定，其实就是理解整个vue或者是react的工作原理,数据双向绑定的原理其实就是数据的劫持和发布订阅，当数据发生变化的时候，我们通过使用object.defineProperty对数据进行一个绑定，当读取数据的时候，我们把监视的数据放入到我们的发布中去，当我们试图修改数据的时候，发布去通知监听者让它去更新试图,当视图发生变化的时候，我们去修改数据，数据再次通知视图发生变化，更新试图

### 10. dom diff 

当我们的页面被组件封装起来之后，当需要更新视图的时候,由虚拟 DOM 来确保只对界面上真正变化的部分进行实际的 DOM 操作应该是非常重要的一种算法.不仅仅数据变化会更新试图，一些事件、一些操作都会引发视图的更新，例如数据被删除了，数据新增了，数据改变了导致了视图的变化等等这些，甚至是用户点击了链接切换了当前的页面等等

核心思想就是给定两棵树，比对他们的不同，找到最少的转化步骤。
