import TodoItem from './TodoItem'
import './TodoList.scss'
export default function TodoList({ todos, deleteTodo }) {
  const todoElements = []
  for (const todo of todos) {
    todoElements.push(
      <TodoItem key={todo.id} id={todo.id} title={todo.title} deleteTodo={deleteTodo} />
    )
  }
  return (
    <div className="todos">
      {todos.length === 0 && (
        <h2 className="todos__isempty">
          Your todo list empty, <br /> add something :)
        </h2>
      )}
      <ul className="todos__list">{todoElements}</ul>
    </div>
  )
}
