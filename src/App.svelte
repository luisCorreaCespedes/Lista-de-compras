<script>
  import { Toast } from "bootstrap";
  let toastEl;
  let opciones = {
    texto: "",
    color: "",
  };
  let instancia;
  let todos = [];
  let todo = {
    id: "",
    texto: "",
    estado: false,
  };
  $: if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  $: if (toastEl) {
    instancia = new Toast(toastEl);
  }
  $: showToast = (texto, color) => {
    opciones = { texto, color };
    instancia.show();
  };
  $: localStorage.setItem("todos", JSON.stringify(todos));
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

<div class="container">
  <h1 class="display-5 my-3">Lista de Compras</h1>
  <form on:submit|preventDefault={addTodo}>
    <input
      type="text"
      placeholder="Escriba un articulo y presione ENTER"
      class="form-control shadow border-0"
      bind:value={todo.texto}
    />
  </form>

  {#each todos as item}
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
  {/each}

  <div class="toast-container position-absolute p-3 top-0 end-0">
    <div
      bind:this={toastEl}
      class="toast align-items-center text-white {opciones.color} border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">{opciones.texto}</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        />
      </div>
    </div>
  </div>
</div>
