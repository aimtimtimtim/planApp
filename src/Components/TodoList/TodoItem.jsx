import React from 'react'
import { useRef } from 'react'
import './TodoItem.scss'
export default function TodoItem({ id, title, date, deleteTodo }) {
  const itemRef = useRef(null)

  function del() {
    if (itemRef.current) {
      itemRef.current.classList.add('removing')
    }

    setTimeout(() => {
      deleteTodo(id)
    }, 300)
  }
  return (
    <li className="todo" ref={itemRef}>
      <div className="todo__info">
        <p className="todo__title">{title}</p>
        <p className="todo__date">{date}</p>
      </div>

      <button className="todo__btn" onClick={del}>
        Delete
      </button>
    </li>
  )
}
