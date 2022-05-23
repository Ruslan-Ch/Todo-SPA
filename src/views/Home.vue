<template>
  <div class="home">
    <div v-if="!notes.length">
      <h3>Нет доступных заметок. Чтобы создать новый, нажмите здесь</h3>
      <icon-button 
        color="orange" 
        type="add_box"
        @action="$router.push('/note')"
        label="Add"
        ></icon-button>
      <hr />
    </div>
    <div>
      <note-card
        v-for="note in notes"
        :note="note"
        :key="note.title"
        @delete-note="handleDeleteNote"
      />
    </div>
  </div>
</template>

<script>
import NoteCard from "../components/NoteCard";
import { NoteService } from '../services/NoteService' 
import Confirm from '../components/Confirm'
import { create } from 'vue-modal-dialogs'
import IconButton from '../components/IconButton'

/**
 * @function подтвердить вызов модального окна, чтобы принять действие
 */
const confirm = create(Confirm, 'title', 'content')

/**
 * @module Home главная страница, содержит список заметок
 */

export default {
  name: "Home",
  data() {
    return {
      notes: []
    };
  },
  components: {
    "note-card": NoteCard,
    "icon-button": IconButton
    
  },
  mounted () {
    this.fetchNotes()
  },
  methods: {
    deleteNote(noteId) {
      NoteService.removeItem(noteId)
      this.fetchNotes()
    },
      /**
     * Извлекает все заметки
     */
    fetchNotes(){
      this.notes = NoteService.fetchNotes()
    },
      /**
     * Удаляет заметку
     */
    async handleDeleteNote(noteId){
      if (await confirm('Вы действительно хотите удалить эту заметку?', 'Эти данные будут потеряны навсегда')) {
        this.deleteNote(noteId)
        } 
    }
  },
};
</script>

<style scoped>
div{
  text-align: center;
}
</style>
