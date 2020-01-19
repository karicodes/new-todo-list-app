import React, { Component } from 'react';

class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskName: props.taskName,
      dueDate: props.dueDate
    };
  }
  

  handleDelete = () => {
    this.props.deleteTask(this.props.id)
  }

  handleMarkComplete = () => {
    this.props.markComplete(this.props.id)
  }

  handleEditTask = () => {
    this.props.editTask(this.props.id)
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-3">
          {this.props.editModeOn
          ? (
          <input
            type='text'
            value={this.state.taskName}
            onChange={e => this.setState({taskName:e.target.value})}
            className="form-control"/>
          ) : <p>{this.props.taskName}</p>}
        </div>
        <div className="col-12 col-sm-3">
          {this.props.editModeOn
          ? (
          <input
          type='date'
          value={this.state.dueDate}
          onChange={e => this.setState({dueDate:e.target.value})}
          className="form-control"/>
          ): <p>{this.props.dueDate}</p>}
        </div>
        <div className="col-12 col-sm-2">
          {this.props.editModeOn
            ? (
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.props.updateTask(this.props.id, this.state.taskName, this.state.dueDate)}>
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