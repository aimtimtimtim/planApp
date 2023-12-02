import React, { useState } from 'react'
import './NewTodo.scss'

export default function NewTodo({ saveTodo }) {
  const [input, setInput] = useState('')

  function saveTodoTitle(event) {
    setInput(event.target.value)
  }

  function formatDate(date) {
    const optionsDateTime = {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }
    const formattedDateTime = date.toLocaleString('ru-RU', optionsDateTime)
    return formattedDateTime
  }
  function save(event) {
    event.preventDefault()
    const todo = {
      title: input,
      date: formatDate(new Date()),
      id: Math.floor(Math.random() * 1000 + 1).toString(),
    }

    if (todo.title !== '') {
      saveTodo(todo)
    }
    setInput('')
  }

  return (
    <div className="newtodo">
      <p className="newtodo__title">Add new Todo</p>
      <form className="newtodo__form" onSubmit={save}>
        <input
          className="newtodo__input"
          placeholder="Enter text"
          type="text"
          onChange={saveTodoTitle}
          value={input}
        />
        <button className="newtodo__btn" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}
