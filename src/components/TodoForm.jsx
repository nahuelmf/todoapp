import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Agregar nueva tarea..."
        className="flex-1 p-2 rounded border dark:bg-gray-800"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">
        Agregar
      </button>
    </form>
  );
};

export default TodoForm;