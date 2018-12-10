import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Clock from './Clock'

class Index extends Component {
    constructor(){
        super()
        this.state = {
            isShowClock : true
        }
    }
    handleShowHide(){
        this.setState({
            isShowClock:!this.state.isShowClock
        })
    }
    render(){
        return (
            <div>
                {this.state.isShowClock ? <Clock/> : null}
                <button onClick={this.handleShowHide.bind(this)}>
                    显示/隐藏时钟
                </button>
            </div>
        )
    }
}


ReactDOM.render(<Index/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
