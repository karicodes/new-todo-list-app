import React, { Component } from 'react';

class AddTask extends Component {
    state = {
        taskName: "",
        dueDate: "0000-00-00"
    };
    updateTaskName = (event) => {
        this.setState({
            taskName: event.target.value
        });
    }

    updateDueDate = (event) => {
        this.setState({
            dueDate: event.target.value
        })
    }

    handleAdd = (event) => {
        this.props.addNewTaskFunc(this.state.taskName, this.state.dueDate);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-4">
                    <input type="text"
                        onChange={this.updateTaskName}
                        value={this.state.taskName}
                        className="form-control"
                        placeholder="Enter task" />
                </div>
                <div className="col-sm-4">
                    <input type="date"
                        className="form-control"
                        onChange={this.updateDueDate}
                        value={this.state.dueDate} />
                </div>
                <div className="col-sm-4">
                    <button onClick={this.handleAdd}
                    className="btn btn-primary">Add</button>
                </div>
            </div>
        );
    }
}

export default AddTask;