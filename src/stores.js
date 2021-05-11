import { writable } from 'svelte/store'

const createAll = () => {
    const {subscribe, set, update} = writable([]);
    return{
        subscribe,
        local: (todos) => {
            set(todos)
        },
        add: (todo) => {
            update(todos => todos = [...todos, todo]);
        },
        delete: (id) => {
            update(todos => todos = todos.filter((item) => item.id !== id));
        },
        put: (id) => {
            update (todos => todos.map((item) =>
            item.id === id ? { ...item, estado: !item.estado } : item
          ))
        }
    }
}

export const todos = createAll();

const createOpc = () => {
    const {subscribe, set, update} = writable({ 
    texto: '',
    color: '',
    estado: false
    });

    return{
        subscribe,
        mostrar: (opc) => {
            update(n => n = opc)
        }
    }
}

export const opciones = createOpc();