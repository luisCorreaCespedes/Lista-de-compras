<script>
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
    todos = [...todos, todo];
    todo = todo = {
      id: "",
      texto: "",
      estado: false,
    };
    showToast("Artículo agregado!", "bg-primary");
  };
</script>

<form on:submit|preventDefault={addTodo}>
  <input
    type="text"
    placeholder="Escriba un articulo y presione ENTER"
    class="form-control shadow border-0"
    bind:value={todo.texto}
  />
</form>
