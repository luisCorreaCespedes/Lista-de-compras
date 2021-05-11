<script>
    import { todos, opciones } from '../stores';
    let todo = {
    id: "",
    texto: "",
    estado: false,
  };

  $: addTodo = () => {
    if (!todo.texto.trim()) {
      todo.texto = "";
      return;
    }
    todo.id = Date.now();
    todos.add(todo);
    todo = todo = {
      id: "",
      texto: "",
      estado: false,
    };

    opciones.mostrar({
        texto: 'Artículo agregado!',
        color: 'bg-primary',
        estado: true
    });

  };
</script>

<form on:submit|preventDefault={addTodo}>
  <input
    type="text"
    placeholder="Escriba un articulo y presione ENTER"
    class="form-control shadow border-0"
    style="background-color: lavenderblush;"
    bind:value={todo.texto}
  />
</form>
