<script>
  import { todos } from './stores';
  import AddTodo from './components/AddTodo.svelte';
  import Todo from './components/Todo.svelte';
import Toast from './components/Toast.svelte';

  $: if (localStorage.getItem("todos")) {
    todos.local(JSON.parse(localStorage.getItem("todos")));
  }
  
  $: localStorage.setItem("todos", JSON.stringify($todos));
  
 
</script>

<main>
  <div class="container">
    <h1 class="display-5 my-3 pb-2 pt-2 rounded"><strong>Lista de Compras</strong></h1>
    
    <AddTodo />
    <Toast />

    {#each $todos as item}
      <Todo {item} />
    {/each}
  </div>
</main>

<style>
  h1{
    background-color: rgb(131, 154, 154);
    text-align: center;
    align-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
</style>
