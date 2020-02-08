import React, { useState } from 'react';

function AddTask(props) {
	const [task_name, setTaskName] = useState("");
	const [due_date, setDueDate] = useState("");

	function updateTaskName (event) {
		setTaskName(event.target.value)
	}

	function updateDueDate (event) {
		setDueDate(event.target.value)
	}

	function handleAdd () {
		props.addNewTask(task_name, due_date);
	}
	
	return (
		<div className="row">
			<div className="col-sm-4">
				<input type="text"
					onChange={updateTaskName}
					value={task_name}
					className="form-control"
					placeholder="Enter task" />
			</div>
			<div className="col-sm-4">
				<input type="date"
					className="form-control"
					onChange={updateDueDate}
					value={due_date} />
			</div>
			<div className="col-sm-4">
				<button onClick={handleAdd}
					className="btn btn-primary">Add</button>
			</div>
		</div>
	)
}

export default AddTask;