import React, { Component } from 'react';

class Todos extends Component {

  handleDelete = () => {
    this.props.deleteTaskFunc(this.props.id)
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-sm-4">
          <p>{this.props.taskName}</p>
        </div>
        <div className="col-12 col-sm-2">
          <p>{this.props.dueDate}</p>
        </div>
        <div className="col-12 col-sm-4">
          {this.props.complete === false ? <button className="btn btn-primary">Mark Complete</button> : <button className="btn btn-primary" disabled>Complete</button>}
        </div>
        <div className="col-12 col-sm-2">
          <button className="btn btn-danger" onClick={this.handleDelete} >Delete</button>
        </div >
      </div >
    );
  }
}

export default Todos;