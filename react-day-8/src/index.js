import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class AutoFocusInput extends Component {
    componentDidMount(){
        this.input.focus()
    }
    //可以看到我们给input元素加了一个ref属性
    //这个属性值是一个函数
    //当input元素在页面上挂载完成后，react会调用这个函数
    //并且把这个挂载以后的DOM节点传给这个函数
    //在这个函数中，我们把这个DOM元素设置为组件实例的一个属性
    //这样以后我们就可以通过this.input获取到这个DOM元素
    render(){
        return (
            <input ref={(input)=> this.input = input }/>
        )
    }
}


ReactDOM.render(<AutoFocusInput/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
