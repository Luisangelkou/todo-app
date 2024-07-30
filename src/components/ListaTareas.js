import React from 'react';
import Tarea from './Tarea';

const ListaTareas = ({ tareas, cambiarEstadoTarea, eliminarTarea }) => {
  return (
    <div>
      {tareas.map((tarea, index) => (
        <Tarea 
          key={index} 
          tarea={tarea} 
          cambiarEstadoTarea={cambiarEstadoTarea} 
          eliminarTarea={eliminarTarea} 
        />
      ))}
    </div>
  );
};

export default ListaTareas;
