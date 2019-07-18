import React, { Component } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends Component {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn("App constructor()")
  }

  componentDidMount(){ //when the page loads
    console.warn("App componentDidMount()")
    //make our fetch call
    fetch('http://localhost:3000/tasks')
    .then(res => res.json())
    .then(tasksArray => {
      //change state so that REACT can change the DOM
      this.setState({taskList: tasksArray})
    })
  }

  onRemoveTask = (id) => {
    //on click of x
    fetch(`http://localhost:3000/tasks/${id}`, {
      method:"DELETE"
    })//make a delete fetch
    .then(res => res.json())
    .then(() => {
      let newTasks = this.state.taskList.filter(task => task.id !== id)
      this.setState({taskList: newTasks})
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.warn("App componentDidUpdate()")
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

//when user submits form
  onAddNewTask = (event) => {
    event.preventDefault()
    fetch('http://localhost:3000/tasks',{
      method:"POST",
      headers: {"Content-type":"application/json"},
      body: JSON.stringify({
        text: this.state.formText,
        done: false
      })
    })//make a POST fetch call
    .then(res => res.json())
    .then(newTask => {
      console.log(newTask)
      this.setState({
        taskList: [...this.state.taskList, newTask]
      })
    })
  }

  render() {
    console.warn("App render()")
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask}/>
        <TaskList
          tasks={this.state.taskList}
          onRemoveTask={this.onRemoveTask}
        />
      </div>
    );
  }
}

export default App;
