<script>

$: delTodo = (id) => {
    todos = todos.filter((item) => item.id != id);
    showToast("Artículo eliminado!", "bg-danger");
  };
  $: editTodo = (id) => {
    todos = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );
    showToast("Artículo listo!", "bg-success");
  };
  $: icon = (valor) => (valor ? "bi bi-arrow-clockwise" : "bi bi-check2");
  $: color = (valor) =>
    valor ? "btn btn-sm btn-warning" : "btn btn-sm btn-success";

</script>

<div class="shadow my-3 p-3 lead">
    <p class={item.estado ? "text-decoration-line-through" : ""}>
      {item.texto}
    </p>
    <button on:click={editTodo(item.id)} class={color(item.estado)}>
      <i class={icon(item.estado)} />
    </button>
    <button on:click={delTodo(item.id)} class="btn btn-sm btn-danger">
      <i class="bi bi-trash" />
    </button>
  </div>