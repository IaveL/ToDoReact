import React, { Component } from "react"
import "./App.css";


class ToDo extends Component {
  state = {
  task: "",
  taskList: []
  }

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    })
  }

  addTask = (event) => {
    let {task, taskList} = this.state
    if(task.length > 0){
    this.setState({
      taskList: taskList.concat({
        task: task,
        id: Date.now()
      }),
      task: ''
    })
  }
  event.preventDefault()
  }

  removeTask = (id, event) => {
    
    let {task, taskList} = this.state
    this.setState({
      taskList: taskList.filter((item) => {
        return item.id != id;
      })
    })
  }

  render(){
    return(
      <form className="MainBox" onSubmit={this.addTask}>
      <div className="Input">
      <h1>Tasks to do!</h1>
      <input  type="text" value={this.state.task} placeholder="Type something to do..." 
onChange={this.handleChange} 
      />
      <button className="TaskAdd">Add task</button>
      </div>

      <div className="Tasks">
      {this.state.taskList.map((item) => (
        <ul className="TaskItems">
          <li>{item.task}</li>
          <li><button className="TaskRemover" 
          onClick={()=>{this.removeTask(item.id)}}
          >X</button></li>
        </ul>
      ))}
      </div>
      </form>
    )
  }
}


export default ToDo;
