import React, { useRef } from 'react'
import './NewTodo.scss'

export default function NewTodo({ saveTodo }) {
  const inputRef = useRef()

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
    const { value } = inputRef.current
    if (value !== '') {
      const todo = {
        title: value,
        date: formatDate(new Date()),
        id: Math.floor(Math.random() * 1000 + 1).toString(),
      }
      saveTodo(todo)
      inputRef.current.value = ''
    }
  }
  return (
    <div className="newtodo">
      <p className="newtodo__title">Add new Todo</p>
      <form className="newtodo__form" onSubmit={save}>
        <input
          className="newtodo__input"
          placeholder="Enter text"
          type="text"
          ref={inputRef}
        />
        <button className="newtodo__btn" type="submit">
          Add
        </button>
      </form>
    </div>
  )
}
