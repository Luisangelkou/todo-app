import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mt-4">
      <input
        type="text"
        placeholder="What's next..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border rounded-l-lg focus:outline-none text-black" // Aquí añadimos "text-black"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
