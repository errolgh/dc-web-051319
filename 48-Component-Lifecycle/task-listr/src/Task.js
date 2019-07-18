import React, {PureComponent} from 'react'

class Task extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      done: props.task.done
    }
    console.warn(`Task ${props.task.id} constructor()`)
  }

  // shouldComponentUpdate(){
  //   console.warn(`Task ${this.props.task.id} shouldComponentUpdate()`)
  //   return false
  // }

  componentDidMount(){
    console.warn(`Task ${this.props.task.id} componentDidMount()`)
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate()`)
  }

  componentWillUnmount(){
    console.warn(`Task ${this.props.task.id} componentWillUnmount()`)
  }



  render(){
    console.warn(`Task ${this.props.task.id} render()`)
    return(
      <div>
        <button onClick={

          ()=>{ this.props.onRemoveTask(this.props.task.id) }

        }>x</button>
        {this.props.task.text}
        <input type="checkbox" checked={this.state.done} onChange={() => {}}/>
      </div>
    )
  }
}

export default Task
