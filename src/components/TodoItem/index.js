// Write your code here

import './index.css'

const TodoItem = props => {
  const {todo, deleteUser} = props
  const {id, title} = todo
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="todo-item-cont">
      <p className="todo">{title}</p>
      <button type="button" className="butn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
