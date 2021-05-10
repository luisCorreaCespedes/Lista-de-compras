<script>
  import { todos } from './stores';
  import AddTodo from './components/AddTodo.svelte';
  import Todo from './components/Todo.svelte';

  $: if (localStorage.getItem("todos")) {
    todos.local(JSON.parse(localStorage.getItem("todos")));
  }
  
  $: localStorage.setItem("todos", JSON.stringify($todos));
  
 
</script>

<div class="container">
  <h1 class="display-5 my-3">Lista de Compras</h1>
  
  <AddTodo />

  {#each $todos as item}
    <Todo {item} />
  {/each}

</div>
