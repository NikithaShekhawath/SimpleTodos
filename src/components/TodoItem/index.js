// Write your code here
import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {editTodo: '', showInput: false}

  onEditTodo = event => {
    this.setState({editTodo: event.target.value})
  }

  onDelete = () => {
    const {deleteTodo, todo} = this.props
    deleteTodo(todo.id)
  }

  onEditSaveTodo = () => {
    const {showInput, editTodo} = this.state
    const {updatingTodo, todo} = this.props
    if (showInput) {
      updatingTodo(todo.id, editTodo)
      this.setState(prevState => ({
        showInput: !prevState.showInput,
        editTodo: '',
      }))
    } else {
      this.setState(prevState => ({
        showInput: !prevState.showInput,
        editTodo: todo.title,
      }))
    }
  }

  render() {
    const {editTodo, showInput} = this.state
    const butnText = showInput ? 'Save' : 'Edit'
    const {todo} = this.props
    const {title} = todo
    return (
      <li className="todo-item-cont">
        {showInput ? (
          <input
            type="text"
            value={editTodo}
            onChange={this.onEditTodo}
            className="editInput"
          />
        ) : (
          <p className="todo">{title}</p>
        )}
        <div className="butn-cont">
          <button type="button" className="butn" onClick={this.onEditSaveTodo}>
            {butnText}
          </button>
          <button type="button" className="butn" onClick={this.onDelete}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
