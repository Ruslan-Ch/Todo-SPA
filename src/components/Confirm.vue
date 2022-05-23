<template>
  <div class="modal-backdrop" @click="$close(false)">
    <div class="modal-dialog">
      <span class="material-icons red md-48">
        warning
      </span>

      <header class="modal-title">{{ title }}</header>
      <div class="modal-body">
        <p>{{ content }}</p>
      </div>
      <footer class="modal-actions">
        <icon-button 
          type="check_box"
          color="orange" 
          @action="$close(true)"
          label="Confirm">
        </icon-button>
        <icon-button 
          type="cancel" 
          color="red" 
          @action="$close(false)"
          label="Cancel">
        </icon-button>
      </footer>
    </div>
  </div>
</template>

<script>
import IconButton from '../components/IconButton'

/**
 * @module Confirm для модального диалога для подтверждения действий
 */
export default {
  name: "Confirm",
  components: {
    "icon-button": IconButton
  },
}
</script>

<style>
.modal-backdrop {
  background: rgba(78, 78, 78, 0.658);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.modal-dialog {
  width: 30rem;
  background: white;
  padding: 1.5rem 2rem;
  border-radius: 0.3rem;
  transition: 0.5s;
}
.modal-title {
  font-weight: bold;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
.modal-actions{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 10px 10px;
}
</style>