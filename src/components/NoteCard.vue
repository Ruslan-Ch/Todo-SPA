<template>
    <div class="note">
        <h1>{{ note.title }}</h1>
        <ul>
            <li
                    :class="todo.completed ? 'todo-completed' : ''"
                    v-for="todo in note.todos"
                    :key="todo.id"
            >
                {{ todo.text }}
            </li>
        </ul>
        <div class="note_actions">
            <icon-button
                    type="draw"
                    color="rgb(0, 124, 255)"
                    @action="goToNote"
                    label="Edit Note"
            >
                Изменить заметку
            </icon-button>
            <icon-button
                    type="delete"
                    color="red"
                    @action="$emit('delete-note', note.noteId)"
                    label="Delete"
            >
                Удалить
            </icon-button>
        </div>
        <hr/>
    </div>
</template>

<script>
    import IconButton from "../components/IconButton";

    /**
     * @module NoteCard отображение заметки в списке на главной странице
     */
    export default {
        name: "NoteCard",
        props: {
            note: Object,
        },
        components: {
            "icon-button": IconButton,
        },
        methods: {
            goToNote() {
                this.$router.push(`/note/${this.note.noteId}`);
            },
        },
    };
</script>

<style>
    .todo-completed {
        text-decoration: line-through;
    }

    .note {
        text-align: center;
    }
</style>
