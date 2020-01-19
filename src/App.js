import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Header from './components/Header';
import AddTask from './components/AddTask';
import OutstandingCount from './components/OutstandingCount';
import Task from './components/Task';
import { SectionHeader } from './App.styles';

class App extends Component {

  state = {
    tasks: [
      {
        id: uuid(),
        taskName: "Learn HTML",
        complete: true,
        dueDate: "2019-11-28",
        editModeOn: false,
      },
      {
        id: uuid(),
        taskName: "Learn CSS",
        complete: true,
        dueDate: "2019-12-02",
        editModeOn: false,
      },
      {
        id: uuid(),
        taskName: "Learn JavaScript",
        complete: true,
        dueDate: "2019-11-11",
        editModeOn: false,
      },
      {
        id: uuid(),
        taskName: "Learn React",
        complete: false,
        dueDate: "2020-01-06",
        editModeOn: false,
      }
    ]
  }


  addNewTask = (name, date) => {
    const newTask = {
      id: uuid(),
      taskName: name,
      complete: false,
      dueDate: date,
      editModeOn: false,
    };

    const copyOfTasks = this.state.tasks.slice();
    copyOfTasks.push(newTask)

    this.setState({ tasks: copyOfTasks })
  }

  deleteTask = (id) => {
    const filteredTasks = this.state.tasks.filter(task => !(task.id === id))

    this.setState({ tasks: filteredTasks })
  }

  markComplete = (id) => {
    const updatedTasks = this.state.tasks.map(task =>
      task.id === id ? { ...task, complete: true } : task)

    this.setState({ tasks: updatedTasks });
  }

  editTask = (id) => {
    const updatedTasks = this.state.tasks.map(task =>
      task.id === id ? { ...task, editModeOn: true } : task)

    this.setState({ tasks: updatedTasks })
  }

  updateTask = (id, name, date) => {
    console.log(name, date)
    const updatedTasks = this.state.tasks.map(task =>
      task.id === id ? { ...task, taskName: name, dueDate: date, editModeOn: false } : task)

    this.setState({ tasks: updatedTasks })
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
        {incompleteTasks.map(task => {
          return <Task
            key={task.id}
            taskName={task.taskName}
            dueDate={task.dueDate}
            complete={task.complete}
            id={task.id}
            editModeOn={task.editModeOn}
            editTask={this.editTask}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
            markComplete={this.markComplete}
          />
        })}
        <SectionHeader>Done</SectionHeader>
        {!completeTasks.length && <h1>You do not have any complete tasks. Get to work!</h1>}
        {completeTasks.map(task => {
          return <Task
            key={task.id}
            taskName={task.taskName}
            dueDate={task.dueDate}
            complete={task.complete}
            id={task.id}
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
