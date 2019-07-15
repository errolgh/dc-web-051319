import React, {Component} from 'react'
import Comment from './Comment'

const commentData = [
  {author: "Ann", content: "hi"},
  {author: "Jenny", content: "hey"},
  {author: "Joseph", content: "hello"},
  {author: "Josh", content: "howdy"},
]

export default class CommentContainer extends Component {
  render(){
    return (
    <div className="comment-container">
      This is the comment container
      {
        commentData.map(commentObj => <Comment
           content={commentObj.content}
           extra="hello"
           author={commentObj.author}
        />)
      }
    </div>
    )
  }
}
