import React from 'react'

const Comment = (props) => {
  //vanilla JS here
  console.log(props)
  return (
    <p className="comment">{props.author} says "{props.content}"</p>
  )
}
export default Comment

// class Comment extends React.Component{
//   render(){
//     console.log(this.props)
//     return (
//       <p className="comment">"{this.props.content}" by {this.props.author}</p>
//     )
//   }
// }

//class needs to extends React.Component, needs to have a render() that returns JSX
//this.props
//function needs to return some JSX
//props is the parameter
