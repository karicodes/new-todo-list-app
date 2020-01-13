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

    const incompleteTasks = this.state.tasks.filter(task => {
      return task.complete === false;
    });

    const completeTasks = this.state.tasks.filter(task => {
      return task.complete === true;
    });

    return (
      <div className="container">
        <Header />
        <AddTask />
        <OutstandingCount />
        <h2>Todo:</h2>
        {incompleteTasks.map(task => {
          return <Todos
            key={task.id}
            taskName={task.taskName}
            dueDate={task.dueDate}
            complete={task.complete}
            id={task.id}
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
          />
        })}
      </div>
    );
  }
}

export default App;
