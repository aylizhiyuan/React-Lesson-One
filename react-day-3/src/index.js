import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//组件的组合、嵌套和组件树

//创建title子组件
class Title extends Component {
    //点击事件可以写成组件的一个方法
    //监听事件不能直接写在组件上。。。。。
    handleClick(e){
        //console.log(e);
        //console.log('click on title.');
        //在发生事件的处理函数中，this指向的是null.....
        //因为它在调用handleClick的时候是通过函数方式调用的，而不是通过对象方法
        //的方式调用的，所以，事件处理函数中并不能通过this获取到类的实例...
        //如果你想在事件函数中使用当前的实例，需要手动绑定this...
        console.log(this);
    }
    render(){
        return (
            <h1 onClick={this.handleClick.bind(this)}>React 小红书</h1>
        )
    }
}
//创建一个header父组件
class Header extends Component {
    render(){
        return (
            <div>
                <Title />
            </div>
        )
    }
}
ReactDOM.render(<Header/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
