import React,{ Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

//创建一个评论回复的大组件
//这个组件中会调用这个功能中的表单部分以及回复部分
//CommentInput是表单部分的组件
//CommentList是回复列表的组件

class CommentApp extends Component {
    constructor(){
        super()
        this.state = {
            comments:[]
        }
    }
    //这里，将comment里面的数据push到comments数组里面，然后传递给List组件用来显示
    handleSubmitComment(comment){
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        })
    }
    render(){
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments={this.state.comments}/>
            </div>
        )
    }
}
export default CommentApp
