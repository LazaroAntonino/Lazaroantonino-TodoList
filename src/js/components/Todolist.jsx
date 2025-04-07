import React, { useState, useEffect } from "react";

export const Todolist = () => {

    const [list, setList] = useState([]);
    const [element, setElement] = useState("");

    const randomId = () => Math.floor(Math.random() * 9999);


    const handleSubmit = (e) => {
        e.preventDefault();
        setList([...list, { label: element, id: randomId(), fondo: fondoAleatorio()}])
        setElement('');
        console.log(list);
    }

    const handleDelete = (id) => {
        let listaRemovida = list.filter(el => el.id != id)
        setList(listaRemovida);
    }

    const randomPlaceHolder = () => {
        const arrayRandoms = [
            "¿Y la de estudiar para cuando?",
            "Esa lista no se hará sola...",
            "¡Dale que tú puedes!",
            "Pon algo más emocionante aquí...",
            "El mundo espera tus tareas...",
            "¿Ya terminaste o sigues pensando?",
            "No olvides esa tarea imposible...",
            "¿Qué tal un descanso? O una tarea más...",
            "No me seas mierdas, seguro hay algo más",
            "Movimiento naranja.... el futuro está en tus manos...",
            "Buah, pedazo de día hace hoy eh.... o no...",
            "Que ganas de comerme una lasaña macho",
            "Espabila macho, que yo veo pocas cosas",
            "Espera espera... miniatura miniatura...",
            "Vamos a hacer fu***** burpeees!!!!",
            "Tienes que tirar la zanahoria podrida de la nevera..."
        ];
        const placeholder = arrayRandoms[Math.floor(Math.random() * arrayRandoms.length)]
        return placeholder;
    }

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
            <h3 className="mt-4">Add your To Do</h3>
            <form onSubmit={handleSubmit} className="my-4">
                <input className="w-25 rounded" maxLength="30" type="text" value={element} onChange={e => setElement(e.target.value)} placeholder={randomPlaceHolder()} />
                <input type="submit" value='Añadir a la lista' hidden />
            </form>
            <ul className="list-group list-group-flush">
                {list.reverse().map(el => (
                    <li key={el.id}className={`list-group-item list-item p-3 mx-5 rounded mb-1 ${el.fondo}`}>
                        <span className="mx-2">{el.label}</span>
                        <span
                            onClick={e => handleDelete(el.id)}
                            className={'borrar-botón fa-solid fa-trash'}>
                        </span>
                    </li>
                ))}
            </ul>

        </div>
    )
}