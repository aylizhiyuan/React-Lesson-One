import React,{Component} from 'react'
class Comment extends Component {
    render(){
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{this.props.comment.username} </span>:&nbsp;
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}
export default Comment