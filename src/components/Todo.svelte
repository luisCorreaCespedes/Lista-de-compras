<script>

import { todos, opciones } from '../stores';

export let item;

$: delTodo = (id) => {
   todos.delete(id);
   opciones.mostrar({
        texto: 'Artículo eliminado!',
        color: 'bg-danger',
        estado: true
    });
  };

  $: editTodo = (id) => {
    todos.put(id);
    opciones.mostrar({
        texto: 'Artículo tachado!',
        color: 'bg-success',
        estado: true
    });
  };

  $: icon = (valor) => (valor ? "bi bi-arrow-clockwise" : "bi bi-check2");
  $: color = (valor) =>
    valor ? "btn btn-sm btn-warning" : "btn btn-sm btn-success";

</script>

<div class="shadow rounded my-3 p-3 lead">
    <p class={item.estado ? "text-decoration-line-through" : ""}>
     <strong> {item.texto} </strong>
    </p>
    <button on:click={editTodo(item.id)} class={color(item.estado)}>
      <i class={icon(item.estado)} />
    </button>
    <button on:click={delTodo(item.id)} class="btn btn-sm btn-danger">
      <i class="bi bi-trash" />
    </button>
</div>

<style>
    div{
        background-color: rgb(231, 213, 213);
    }
</style>