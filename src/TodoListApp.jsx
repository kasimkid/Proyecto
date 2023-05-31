import React, { useState } from "react";
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem";
import './todo.css';


export const TodoListApp = () => {
  const [tareas, setTareas] = useState([]);


  const nuevaTarea = (tarea) => {
    setTareas([...tareas, tarea])
  };
  // console.log(tareas);

  return (
    <div>
      <TodoForm nuevaTarea={nuevaTarea} 
      />
      {
        tareas.map(() => <TodoItem Tarea/>)
      }

    </div>
  );
}


