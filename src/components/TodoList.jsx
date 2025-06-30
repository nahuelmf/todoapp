import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="bg-white dark:bg-gray-800 rounded shadow mt-4">
      {todos.length === 0 ? (
        <li className="p-4 text-center text-gray-500">No hay tareas</li>
      ) : (
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))
      )}
    </ul>
  );
};

export default TodoList;