import React, { Component } from 'react';
// import uuid from 'uuid/v4';
import axios from 'axios';
import Header from './components/Header';
import AddTask from './components/AddTask';
import OutstandingCount from './components/OutstandingCount';
import Task from './components/Task';
import { SectionHeader } from './App.styles';

class App extends Component {

  state = {
    tasks: []
  }

  componentDidMount() {
    axios.get("https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then((response) => {
        const tasks = response.data.tasks;
        this.setState({
          tasks: tasks
        })
      })
      .catch((err) => {
        console.log(err)
      });
  }

  addNewTask = (name, date) => {
    const newTask = {
      task_name: name,
      complete: false,
      due_date: date,
    };

    axios.post("https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks", newTask)
      .then((response) => {
        const newTodo = response.data;
        const copyOfTasks = this.state.tasks.slice();
        copyOfTasks.push(newTodo);

        this.setState({
          tasks: copyOfTasks
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deleteTask = (taskId) => {
    axios.delete(`https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks/${taskId}`)
      .then((response) => {
        const filteredTasks = this.state.tasks.filter(task => !(task.taskId === taskId))

        this.setState({ tasks: filteredTasks })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  markComplete = (taskId, name, date) => {

    axios.put(`https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks/${taskId}`, {
      task_name: name,
      due_date: date,
      complete: true,
    })
      .then(() => {
        const updatedTasks = this.state.tasks.map(task =>
          task.taskId === taskId ? { ...task, complete: true } : task)

        this.setState({ tasks: updatedTasks });
      })
      .catch(err => {
        console.log(err);
      })
  }

  editTask = (taskId) => {
    const updatedTasks = this.state.tasks.map(task =>
      task.taskId === taskId ? { ...task, editModeOn: true } : task)

    this.setState({ tasks: updatedTasks })
  }

  updateTask = (taskId, name, date, complete) => {
    console.log(complete)
    axios.put(`https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks/${taskId}`, {
      task_name: name,
      due_date: date,
      complete: complete,
    })
      .then(() => {
        const updatedTasks = this.state.tasks.map(task =>
          task.taskId === taskId ? { ...task, task_name: name, due_date: date, editModeOn: false } : task)

        this.setState({
          tasks: updatedTasks
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {

    const incompleteTasks = this.state.tasks.filter(task => {
      return task.complete === false;
    });

    const completeTasks = this.state.tasks.filter(task => {
      return task.complete === true;
    });

    return (
      <div className="container">
        <Header />
        <AddTask addNewTask={this.addNewTask} />
        <OutstandingCount count={incompleteTasks.length} />
        <SectionHeader>Todo</SectionHeader>
        {!incompleteTasks.length && <h1>You have no outstanding tasks. Add one above!</h1>}
        {incompleteTasks.map((task, idx) => {
          return <Task
            key={`${task.task_name} ${idx}`}
            task_name={task.task_name}
            due_date={task.due_date}
            complete={task.complete}
            taskId={task.taskId}
            editModeOn={task.editModeOn}
            editTask={this.editTask}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
            markComplete={this.markComplete}
          />
        })}
        <SectionHeader>Done</SectionHeader>
        {!completeTasks.length && <h1>You do not have any complete tasks. Get to work!</h1>}
        {completeTasks.map((task, idx) => {
          return <Task
            key={`${task.task_name} ${idx}`}
            task_name={task.task_name}
            due_date={task.due_date}
            complete={task.complete}
            taskId={task.taskId}
            editModeOn={task.editModeOn}
            editTask={this.editTask}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
          />
        })}
      </div>
    );
  }
}

export default App;
