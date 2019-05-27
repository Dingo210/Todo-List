import React, { Component } from 'react'
import './App.css'
import todo from './todo';
class App extends Component {
  render() {
    return (
      <div className="todo">
        <div className="header">
          <form>
            <input placeholder="Task" />
            <button type="submit"> Add Task </button>
          </form>
        </div>
      </div>
    )
  }
}
export default App
