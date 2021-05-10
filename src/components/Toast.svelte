<script>

import { Toast } from "bootstrap";
  let toastEl;
  let opciones = {
    texto: "",
    color: "",
  };
  let instancia;
  $: if (toastEl) {
    instancia = new Toast(toastEl);
  }
  $: showToast = (texto, color) => {
    opciones = { texto, color };
    instancia.show();
  };

</script>

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