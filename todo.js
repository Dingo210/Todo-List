import todo from './todo';
import React, { Component } from 'react'
class Todo extends Component {
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
export default todo
