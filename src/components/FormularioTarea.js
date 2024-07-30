import React, { useState } from 'react';

const FormularioTarea = ({ agregarTarea }) => {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (titulo.trim() && descripcion.trim()) {
      agregarTarea({ titulo, descripcion, completada: false });
      setTitulo('');
      setDescripcion('');
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input 
        type="text" 
        placeholder="Título" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
      />
      <textarea 
        placeholder="Descripción" 
        value={descripcion} 
        onChange={(e) => setDescripcion(e.target.value)} 
      />
      <button className="add-task-button" type="submit">Agregar Tarea</button>
    </form>
  );
};

export default FormularioTarea;
