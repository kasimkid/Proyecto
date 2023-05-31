import { useState } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState('');
    const [validar, setValidar] = useState(true);

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const enviar = (event) => {
        event.preventDefault();
        if (input.trim() !== "") {
            props.nuevaTarea(input);
            setInput("");
            setValidar(true);
        } else {
            setValidar(false);

        }

    }

    return (
            <form className="form" onSubmit={enviar}>
                <h1>Tareas a realizar</h1>
                <input type='text'
                    placeholder='Asignar tarea'
                    value={input} onChange={handleInput}
                />
                <button className="btn">
                    Añadir
                </button>
            {
                !validar &&
                <div className="validar">Añade una Tarea, por favor
                </div>
            }
             </form>


    );
};

export default TodoForm;
