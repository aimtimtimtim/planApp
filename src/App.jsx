import React, { useState, useEffect } from 'react'

import './App.css'

import Header from './Components/Header/Header'
import NewTodo from './Components/NewTodo/NewTodo'
import TodoList from './Components/TodoList/TodoLIst'
import Footer from './Components/Footer/Footer'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || []
    setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }
  function saveTodo(todo) {
    setTodos((prevTodos) => [...prevTodos, todo])
    console.log(localStorage)
  }
  return (
    <div className="container">
      <Header />
      <NewTodo saveTodo={saveTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  )
}
