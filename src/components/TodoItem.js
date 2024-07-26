import React from 'react';

const TodoItem = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white p-2 mt-2 rounded-lg">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className="mr-2"
      />
      <span className={`flex-grow ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      <button onClick={() => removeTodo(todo.id)} className="text-red-500">
        X
      </button>
    </div>
  );
};

export default TodoItem;
