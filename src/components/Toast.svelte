<script>

import { Toast } from "bootstrap";

import { opciones } from '../stores';

  let toastEl;

  let instancia;

  $: if (toastEl) {
    instancia = new Toast(toastEl);
  }

  $: if ($opciones.estado){
      instancia.show();
  }


</script>

<div class="toast-container position-absolute p-3 top-0 end-0">
    <div
      bind:this={toastEl}
      class="toast align-items-center text-white {$opciones.color} border-0"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">{$opciones.texto}</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        />
      </div>
    </div>
  </div>