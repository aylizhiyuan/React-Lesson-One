import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';
//一个按钮组件
class LikeButton extends Component {
    constructor () {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLikeButton () {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render () {
        //通过this.props接收来自父组件传递过来的参数.
        const likedText = this.props.likedText || '取消'
        const unlikedText = this.props.unlikedText || '点赞'
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? likedText : unlikedText} 👍
            </button>
        )
    }
}
class Index extends Component {
    //在使用一个组件的时候，可以把参数放在标签的属性当中，所有的属性都会作为
    //props对象的键值
    render () {
        return (
            <div>
                <LikeButton likedText='已赞' unlikedText='赞' />
            </div>
        )
    }
}
ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
