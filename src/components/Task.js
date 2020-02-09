import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Row = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 20px;
  `


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
    this.props.markComplete(this.props.taskId, this.state.task_name, this.state.due_date)
  }

  handleEditTask = () => {
    this.props.editTask(this.props.taskId)
  }

  render() {
    return (
      <Row className="row">
        <div className="col-6 col-sm-3">
          {this.props.editModeOn
          ? (
          <input
            type='text'
            value={this.state.task_name}
            onChange={e => this.setState({task_name:e.target.value})}
            className="form-control"/>
          ) : <p>{this.props.task_name}</p>}
        </div>
        <div className="col-6 col-sm-3">
          {this.props.editModeOn
          ? (
          <input
          type='date'
          value={this.state.due_date}
          onChange={e => this.setState({due_date:e.target.value})}
          className="form-control"/>
          ) : <p>{moment(this.props.due_date).format("Do MMMM YYYY")}</p>}
        </div>
        <div className="col-4 col-sm-2">
          {this.props.editModeOn
            ? (
            <button
              className="btn btn-outline-secondary"
              onClick={() => this.props.updateTask(this.props.taskId, this.state.task_name, this.state.due_date, this.props.complete)}>
                Update
            </button>
            ) : <button className="btn btn-outline-primary" onClick={this.handleEditTask}>Edit</button>}
        </div>        
        <div className="col-4 col-sm-2">
          {!this.props.complete
            ? <button className="btn btn-outline-success" onClick={this.handleMarkComplete} >Mark Complete</button>
            : <button className="btn btn-outline-success" disabled>Complete</button>}
        </div>
        <div className="col-4 col-sm-2">
          <button className="btn btn-outline-danger" onClick={this.handleDelete} >Delete</button>
        </div >
      </Row >
    );
  }
}

export default Task;