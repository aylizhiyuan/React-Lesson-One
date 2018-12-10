//入口文件

//1.现在react模块中引入React和Component父类
//只要我们写react组件，就必须要引入这两个东西
import React,{ Component } from 'react';

//reactDOM是为了将我们的组件渲染到页面中去，没有其他的作用
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

//2.创建react组件，是通过继承Component类，里面有一个render方法
//将这个组件的HTML结构返回，必须是以return 形式返回的，在return中
// 的语法就是JSX，在javascript中写的标签语法叫JSX

class Header extends Component {
    //能够让JS支持这种直接可以在JS中写HTML标签结构的语法，我们就叫JSX
    //也有个别名，叫虚拟DOM---visual DOM....
    render(){
        //声明一个变量
        //const word = 'is good';
        const className = 'test';
        //在JSX当中输出变量的话，使用的是{}
        //里面既可以写变量，也可以写表达式，也可以写函数，当然，必须是自执行函数，不然没办法调用。。。。
        return (
            <div className={className}>
                <h1 className='test'>react小蓝书{ 1 + 2 }{(function(){return 'is good'})()}</h1>
            </div>
        )
    }
}
//3.通过reactDOM.render方法将header组件输出到页面中去.
ReactDOM.render(<Header/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
