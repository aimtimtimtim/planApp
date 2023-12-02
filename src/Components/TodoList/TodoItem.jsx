import React from 'react'
import { useRef } from 'react'
import './TodoItem.scss'
export default function TodoItem({ id, title, deleteTodo }) {
  const itemRef = useRef(null)

  function del() {
    if (itemRef.current) {
      itemRef.current.classList.add('removing')
    }

    setTimeout(() => {
      deleteTodo(id)
    }, 500)
  }
  return (
    <li className="todos__item" ref={itemRef}>
      <p className="todos__title">{title}</p>
      <button className="todos__btn" onClick={del}>
        Delete
      </button>
    </li>
  )
}
