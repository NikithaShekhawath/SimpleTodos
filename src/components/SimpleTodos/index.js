import './index.css'

import {Component} from 'react'

import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todoList: initialTodosList, enterTodo: ''}

  onEnterTodo = event => {
    this.setState({enterTodo: event.target.value})
  }

  onAddTodo = () => {
    const {enterTodo, todoList} = this.state
    const len = enterTodo.length
    const lastChar = enterTodo[len - 1]
    console.log(typeof lastChar)
    console.log(lastChar)
    const numeric = parseInt(lastChar) === lastChar
    console.log(numeric)
    if (!numeric && enterTodo[len - 2] === ' ') {
      const freq = parseInt(lastChar)
      const text = enterTodo.slice(0, len - 1)

      let i = 0
      let count = 1
      const tempList = []
      while (i < freq) {
        const newTodo = {
          id: text + (len + count),
          title: text,
        }
        tempList.push(newTodo)
        i += 1
        count += 1
      }

      this.setState(prevState => ({
        todoList: [...prevState.todoList, ...tempList],
        enterTodo: '',
      }))
    } else {
      const newTodo = {
        id: enterTodo + (todoList.length + 1),
        title: enterTodo,
      }
      this.setState(prevState => ({
        todoList: [...prevState.todoList, newTodo],
        enterTodo: '',
      }))
    }
  }

  deleteTodo = id => {
    const {todoList} = this.state
    const filteredList = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredList})
  }

  updatingTodo = (id, content) => {
    const {todoList} = this.state
    const updatedList = todoList.map(each => {
      if (each.id === id) {
        return {...each, title: content}
      }
      return each
    })
    this.setState({todoList: updatedList})
  }

  render() {
    const {todoList, enterTodo} = this.state
    return (
      <div className="bg-cont">
        <div className="main-cont">
          <h1 className="heading">Simple Todos</h1>
          <div className="input-cont">
            <input
              type="text"
              placeholder="Type your todo"
              value={enterTodo}
              className="todo-input"
              onChange={this.onEnterTodo}
            />
            <button type="button" className="add-butn" onClick={this.onAddTodo}>
              Add
            </button>
          </div>
          <ul className="list-cont">
            {todoList.map(each => (
              <TodoItem
                todo={each}
                key={each.id}
                deleteTodo={this.deleteTodo}
                updatingTodo={this.updatingTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
