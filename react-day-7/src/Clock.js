import React,{Component} from 'react'

class Clock extends Component {
    constructor(){
        //一般来说，所有关于组件自身的状态的初始化工作都会放在
        //这里去做。
        super()
        this.state = {
            date:new Date()
        }
    }
    componentWillMount(){
        //一些组件启动的动作，例如像发送ajax请求/定时器的启动等
        //放在这里
        this.timer = setInterval(()=>{
            this.setState({
                date:new Date()
            })
        },1000)
    }
    componentWillUnmount(){
        //当组件被销毁的时候就会调用这个，它的作用就是在组件
        //销毁的时候做这种清理的工作，例如清理该组件的定时器
        //和其他的数据清理工作
        clearInterval(this.timer)
    }
    //以下是更新阶段的生命周期
    shouldComponentUpdate(nextProps,nextState){
        //你可以通过这个方法控制组件是否重新渲染
        //如果返回false组件就不会重新渲染了
        return true
    }
    componentWillReceiveProps(nextProps){
        //组件从父组件接收到新的prop之前调用
    }
    componentWillUpdate(){
        //组件开始重新渲染之前调用
    }
    componentDidUpdate(){
        //组件重新渲染并且把更改变更为真实的DOM以后调用
    }
    render(){
        return (
            <div>
                <h1>
                    <p>现在的时间是:</p>
                    {this.state.date.toLocaleTimeString()}
                </h1>
            </div>
        )
    }
}

export default Clock