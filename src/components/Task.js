import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task_name: props.task_name,
      due_date: props.due_date
    };
  }
  

  handleDelete = () => {
    this.props.deleteTask(this.props.taskId)
  }

  handleMarkComplete = () => {
    this.props.markComplete(this.props.taskId)
  }

  handleEditTask = () => {
    this.props.editTask(this.props.taskId)
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-3">
          {this.props.editModeOn
          ? (
          <input
            type='text'
            value={this.state.task_name}
            onChange={e => this.setState({task_name:e.target.value})}
            className="form-control"/>
          ) : <p>{this.props.task_name}</p>}
        </div>
        <div className="col-12 col-sm-3">
          {this.props.editModeOn
          ? (
          <input
          type='date'
          value={this.state.due_date}
          onChange={e => this.setState({due_date:e.target.value})}
          className="form-control"/>
          ): <p>{this.props.due_date}</p>}
        </div>
        <div className="col-12 col-sm-2">
          {this.props.editModeOn
            ? (
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.props.updateTask(this.props.taskId, this.state.task_name, this.state.due_date, this.props.complete)}>
                Update
            </button>
            ) : <button className="btn btn-outline-primary" onClick={this.handleEditTask}>Edit</button>}
        </div>        
        <div className="col-12 col-sm-2">
          {!this.props.complete
            ? <button className="btn btn-outline-success" onClick={this.handleMarkComplete} >Mark Complete</button>
            : <button className="btn btn-outline-success" disabled>Complete</button>}
        </div>
        <div className="col-12 col-sm-2">
          <button className="btn btn-outline-danger" onClick={this.handleDelete} >Delete</button>
        </div >
      </div >
    );
  }
}

export default Task;