import React, {Component} from 'react'
import Comment from "./Comment";
class CommentList extends Component {
    //设置默认的参数
    static defaultProps = {
        comments:[]
    }
    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render(){
        return (
            <div>
                {this.props.comments.map((comment,i)=>{
                    return (
                        <Comment onDeleteComment={this.handleDeleteComment.bind(this)} index={i} key={i} comment={comment}/>
                        )
                })}
            </div>
        )
    }
}
export default CommentList