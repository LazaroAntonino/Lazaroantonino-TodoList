import React, { useState, useEffect } from "react";

export const Todolist = () => {

    const [list, setList] = useState([]);
    const [completedList, setCompletedList] = useState([]);
    const [placeholder, setPlaceHolder] = useState([]);
    const [element, setElement] = useState("");

    const randomId = () => Math.floor(Math.random() * 9999);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (element) {
            const newItem = {
                label: element,
                id: randomId(),
                fondo: fondoAleatorio(),
                completed: false // Aquí defines si está completed o no
            };

            if (newItem.completed) {
                setCompletedList([...completedList, newItem]); // Si completed es true
            } else {
                setList([...list, newItem]); // Si completed es false
            }

            setElement(''); // Limpia el input
        }
    };

    const handleDelete = (id) => {
        let listaRemovida = list.filter(el => el.id != id)
        let listaRemovidaCompleted = completedList.filter(el => el.id != id)
        setCompletedList(listaRemovidaCompleted);
        setList(listaRemovida);
    }

    const handleComplete = (id) => {
        // Encuentra el elemento a mover en cualquiera de los arrays
        const itemToMove = list.find(el => el.id === id) || completedList.find(el => el.id === id);

        if (itemToMove) {
            // Invierte el valor de 'completed'
            const isCompleted = itemToMove.completed;
            itemToMove.completed = !isCompleted;

            if (isCompleted) {
                // Si estaba en 'completedList', eliminarlo de allí y agregarlo a 'list'
                setCompletedList(completedList.filter(el => el.id !== id));
                setList([...list, itemToMove]);
            } else {
                // Si estaba en 'list', eliminarlo de allí y agregarlo a 'completedList'
                setList(list.filter(el => el.id !== id));
                setCompletedList([...completedList, itemToMove]);
            }
        }
    };

    const randomPlaceHolder = () => {
        if (element) {
            const arrayRandoms = [
                "Ingrese su próxima tarea pendiente...",
                "Planifique su actividad para alcanzar el éxito.",
                "Registre su compromiso actual...",
                "Establezca las prioridades de su jornada.",
                "Defina su objetivo inmediato...",
                "La organización es la clave del progreso.",
                "Agregue una acción que impulse su productividad.",
                "Comprométase con su meta diaria..."
            ];
            const placeholder = arrayRandoms[Math.floor(Math.random() * arrayRandoms.length)];
            setPlaceHolder(prev => prev = placeholder);
        }
    };


    const fondoAleatorio = () => {
        const arrayFondos = [
            "fondo-primavera",
            "fondo-vintage",
            "fondo-suave",
            "fondo-dorado",
            "fondo-marfil",
            "fondo-seda",
            "fondo-pureza",
            "fondo-tranquilo",
            "fondo-cremoso",
            "fondo-lujo",
            "fondo-tierra",
            "fondo-cálido",
            "fondo-natural",
            "fondo-delicado",
            "fondo-palido",
            "fondo-luminoso",
            "fondo-elegante",
            "fondo-dulce",
            "fondo-suavidad",
        ];
        const fondoAleatorio = arrayFondos[Math.floor(Math.random() * arrayFondos.length)]
        return fondoAleatorio;
    }

    return (
        <div>
            <h3 className="display-4 m-5 text-center">Add your To Do</h3>
            <form onSubmit={handleSubmit} className="my-4 d-flex justify-content-center align-items-center gap-2">
                <input
                    type="text"
                    className="todo-input"
                    maxLength="30"
                    value={element}
                    onChange={e => setElement(e.target.value)}
                    placeholder={placeholder.length > 3 ? placeholder : "Ingresa una frase"}
                />
                <button onClick={randomPlaceHolder} type="submit" className="btn-add-todo">
                    Añadir a la lista
                </button>
            </form>

            <div className="d-flex justify-content-center">
                <ul className="list-group list-group-flush w-50 bg-light bg-opacity-25 py-2 rounded h-auto">
                    <h3 className="mb-5">Pending</h3>
                    {list.map(el => (
                        <li key={el.id} className={`list-group-item list-item p-3 mx-5 rounded mb-3 ${el.fondo} shadow-sm border`}>
                            {console.log(el)}
                            <span className="mx-2">{el.label}</span>
                            <span
                                onClick={e => handleDelete(el.id)}
                                className={'borrar-boton fa-solid fa-trash mx-2'}>
                            </span>
                            <span
                                onClick={() => handleComplete(el.id)}
                                className={'borrar-boton fa-solid fa-check mx-2 text-success'}>
                            </span>

                        </li>
                    ))}
                </ul>
                {completedList.length > 0 &&(
                    <ul className="list-group list-group-flush w-50 bg-light bg-opacity-25 py-2 rounded h-auto">
                    <h3 className="mb-5">Done</h3>
                    {completedList.map(el => (
                        <li key={el.id} className={`list-group-item list-item p-3 mx-5 rounded mb-3 ${el.fondo} bg-light shadow-sm border`}>
                            {console.log(el)}
                            <span className="mx-2 completed">{el.label}</span>
                            <span
                                onClick={e => handleDelete(el.id)}
                                className={'borrar-boton fa-solid fa-trash mx-2'}>
                            </span>
                            <span
                                onClick={() => handleComplete(el.id)}
                                className={'borrar-boton fa-solid fa-xmark mx-2'}>
                            </span>
                        </li>
                    ))}
                </ul>
                )}
            </div>

        </div>
    )
}