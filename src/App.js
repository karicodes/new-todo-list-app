import React, { Component } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import OutstandingCount from './components/OutstandingCount';
import Todos from './components/Todos';
import './App.css';
import uuid from 'uuid/v4';

class App extends Component {

  state = {
    tasks: [
      {
        id: uuid(),
        taskName: "Learn HTML",
        complete: true,
        dueDate: "2019-11-28"
      },
      {
        id: uuid(),
        taskName: "Learn CSS",
        complete: true,
        dueDate: "2019-12-02"
      },
      {
        id: uuid(),
        taskName: "Learn JavaScript",
        complete: true,
        dueDate: "2019-11-11"
      },
      {
        id: uuid(),
        taskName: "Learn React",
        complete: false,
        dueDate: "2020-01-06"
      }
    ]
  }

  render() {

    // Incomplete Tasks
    const incompleteTasks = this.state.tasks.filter(task => {
      return task.complete === false;
    });

    // Complete Tasks
    const completeTasks = this.state.tasks.filter(task => {
      return task.complete === true;
    });

    // Add New Task
    const addNewTask = (name, date) => {
      const newTask = {
        id: uuid(),
        taskName: name,
        complete: false,
        dueDate: date,
      };

      const copyOfTasks = this.state.tasks.slice();
      copyOfTasks.push(newTask)

      this.setState({
        tasks: copyOfTasks
      })
    }

    // Delete Task
    const deleteTask = (id) => {
      const filteredTasks = this.state.tasks.filter(task => {
        if (task.id === id) {
          return false;
        } else return true;
      })

      this.setState({
        tasks: filteredTasks
      })
    }

    // Mark task complete
    const markComplete = (id) => {
      const filteredTasks = this.state.tasks.map(task => {
        if (task.id === id) return { ...task, complete: true };
        else return task;
      })

      this.setState({
        tasks: filteredTasks
      })

    }

    return (
      <div className="container">
        <Header />
        <AddTask addNewTaskFunc={addNewTask} />
        <OutstandingCount count={incompleteTasks.length} />
        <h2>Todo:</h2>
        {incompleteTasks.map(task => {
          return <Todos
            key={task.id}
            taskName={task.taskName}
            dueDate={task.dueDate}
            complete={task.complete}
            id={task.id}
            deleteTaskFunc={deleteTask}
            markCompleteFunc={markComplete}
          />
        })}
        <h2>Done:</h2>
        {completeTasks.map(task => {
          return <Todos
            key={task.id}
            taskName={task.taskName}
            dueDate={task.dueDate}
            complete={task.complete}
            id={task.id}
            deleteTaskFunc={deleteTask}
          />
        })}
      </div>
    );
  }
}

export default App;
