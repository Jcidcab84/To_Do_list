const formulario = document.getElementById("formulario");
const input = document.getElementById("input");
const listaTarea = document.getElementById("lista-tareas");
const template = document.getElementById("template").content;
const fragment = document.createDocumentFragment();


let tareas = {
    7159320767: {
        id: 7159320767,
        texto :'Tarea 1',
        estado : false, 
    },
    700159500636: {
        id: 700159500636,
        texto :'Tarea 2',
        estado : false, 
    }
}

document.addEventListener("DOMContentLoaded", () => {
    pintarTareas()
})

listaTarea.addEventListener("click", e => {
    btnAccion(e)
})


// console.log(Date.now());

formulario.addEventListener('submit', e => {
    e.preventDefault()
    // console.log(e.target[0].value)
    // console.log(e.target.querySelector('input').value)
    // console.log(input.value)
   
    setTarea(e)
})


const setTarea = e => {
    if (input.value.trim() === '') {
        console.log('esta vacio')
        return
    }
       
    const tarea = {
        id: Date.now(),
        texto :input.value,
        estado : false, 
    }

    tareas[tarea.id] = tarea
    // console.log(tareas)   
    formulario.reset()
    input.focus()
    pintarTareas()
}

const pintarTareas = () => {
    listaTarea.innerHTML= "";
    Object.values(tareas).forEach(tarea => {
    // console.log(tarea)   
    const clone = template.cloneNode(true)
    clone.querySelector('p').textContent = tarea.texto
    fragment.appendChild(clone)
    });
    listaTarea.appendChild(fragment)
}

const btnAccion = e => {

    console.log(e.target)
}