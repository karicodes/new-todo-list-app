import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	align-items: flex-end;
	padding-bottom: 20px;
	padding-left: 20px;
	font-weight: bold;
`

const Button = styled.div`
	width: 500px;
`

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
		setTaskName("");
		setDueDate("");
	}
	
	return (
		<Container className="row">
			<div className="col-sm-4" >
				<p>Task</p>
				<input type="text"
					onChange={updateTaskName}
					value={task_name}
					className="form-control"
					placeholder="Enter task" />
			</div>
			<div className="col-sm-4">
				<p>Due Date</p>
				<input type="date"
					className="form-control"
					onChange={updateDueDate}
					value={due_date} />
			</div>
			<Button className="col-sm-4">
				<button onClick={handleAdd}
					className="btn btn-outline-dark btn-lg">Add</button>
			</Button>
		</Container>
	)
}

export default AddTask;