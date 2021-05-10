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
        },
    }
}

export const todos = createAll();