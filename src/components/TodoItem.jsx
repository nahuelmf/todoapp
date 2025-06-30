const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const baseStyle = "flex-1 cursor-pointer font-medium";
  const completedStyle = "text-green-600 line-through";
  const pendingStyle = "text-yellow-500";
  const allStyle = "text-blue-500";

  const getColor = () => {
    if (todo.completed) return `${baseStyle} ${completedStyle}`;
    return `${baseStyle} ${pendingStyle}`;
  };

  return (
    <li className="flex justify-between items-center p-2 border-b dark:border-gray-700">
      <span
        className={getColor()}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
        title="Eliminar"
      >
        ✖
      </button>
    </li>
  );
};

export default TodoItem;
