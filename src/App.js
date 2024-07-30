import React, { useState } from 'react';
import './App.css';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';

const App = () => {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('todas');

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);
  };

  const cambiarEstadoTarea = (titulo) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.titulo === titulo ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (titulo) => {
    setTareas(tareas.filter((tarea) => tarea.titulo !== titulo));
  };

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'noCompletadas') return !tarea.completada;
    return true;
  });

  return (
    <div className="container">
      <h1>Gestión de Proyectos</h1>
      <FormularioTarea agregarTarea={agregarTarea} />
      <div className="filters">
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
        <button onClick={() => setFiltro('noCompletadas')}>No Completadas</button>
      </div>
      <ListaTareas 
        tareas={tareasFiltradas} 
        cambiarEstadoTarea={cambiarEstadoTarea} 
        eliminarTarea={eliminarTarea} 
      />
    </div>
  );
};

export default App;
