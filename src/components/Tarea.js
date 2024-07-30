import React from 'react';

const Tarea = ({ tarea, cambiarEstadoTarea, eliminarTarea }) => {
  return (
    <div className={`task-item ${tarea.completada ? 'completed' : ''}`}>
      <div>
        <h3>{tarea.titulo}</h3>
        <p>{tarea.descripcion}</p>
      </div>
      <div>
        <button onClick={() => cambiarEstadoTarea(tarea.titulo)}>
          {tarea.completada ? 'Desmarcar' : 'Marcar'}
        </button>
        <button onClick={() => eliminarTarea(tarea.titulo)}>Eliminar</button>
      </div>
    </div>
  );
};

export default Tarea;
