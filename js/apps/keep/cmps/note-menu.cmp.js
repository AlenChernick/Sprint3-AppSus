import { eventDeleteNote, eventUpdateNote } from '../../../services/eventBus.service.js'

export default {
    props: ['note'],
    template: `
    <section class="note-menu">
        <button class="note-menu-btn note-menu-pin-btn" :class="pinned"  @click="pinnedToggle"><i class="fa-solid fa-thumbtack"></i></button>
        <!-- <div class="note-menu-color-btn"><i class="fa-solid fa-palette"></i></div> -->
        <!-- <button class="note-menu-email-btn" @click="sendToEmail"><i class="fa-solid fa-envelope"></i></button>
        <button class="note-menu-edit-btn" @click="editNote"><i class="fa-solid fa-pen-to-square"></i></button> -->
        <button class="note-menu-btn note-menu-trash-btn" @click="deleteNote"><i class="fa-solid fa-trash"></i></button>
        </section>
    `,
    data() {
        return {
            toggleBtnColor: false,
        };
    },
    created() { },
    methods: {
        deleteNote() {
            eventDeleteNote(this.note.id)
        },
        pinnedToggle() {
            const newNote = JSON.parse(JSON.stringify(this.note))
            newNote.isPinned = !newNote.isPinned
            eventUpdateNote(newNote)
        }
    },
    computed: {
        pinned() {
            return { pinned: this.note.isPinned }
        }
    },
    unmounted() { },
};