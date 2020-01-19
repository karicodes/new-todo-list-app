import React, { useState } from 'react';

function AddTask(props) {
	const [taskName, setTaskName] = useState("");
	const [dueDate, setDueDate] = useState("");

	function updateTaskName (event) {
		setTaskName(event.target.value)
	}

	function updateDueDate (event) {
		setDueDate(event.target.value)
	}

	function handleAdd () {
		props.addNewTask(taskName, dueDate);
	}
	
	return (
		<div className="row">
			<div className="col-sm-4">
				<input type="text"
					onChange={updateTaskName}
					value={taskName}
					className="form-control"
					placeholder="Enter task" />
			</div>
			<div className="col-sm-4">
				<input type="date"
					className="form-control"
					onChange={updateDueDate}
					value={dueDate} />
			</div>
			<div className="col-sm-4">
				<button onClick={handleAdd}
					className="btn btn-primary">Add</button>
			</div>
		</div>
	)
}

export default AddTask;