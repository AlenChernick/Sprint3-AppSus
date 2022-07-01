import { eventDeleteNote, eventUpdateNote } from '../../../services/eventBus.service.js'
import noteColorSelect from '../cmps/note-color-select.cmp.js'

export default {
    props: ['note'],
    template: `
    <section class="note-menu">
        <div class="note-menu-color-btn-container">
            <button class="note-menu-btn note-menu-color-btn"><i class="fa-solid fa-palette"></i></button>
            <note-color-select class="note-color-select" @colorChanged="changeNoteColor"/>
    </div>
        <button class="note-menu-btn note-menu-pin-btn" :class="pinned"  @click="pinnedToggle"><i class="fa-solid fa-thumbtack"></i></button>
        <!-- <button class="note-menu-email-btn" @click="sendToEmail"><i class="fa-solid fa-envelope"></i></button> -->
        <button class="note-menu-btn note-menu-edit-btn" @click="editNote"><i class="fa-solid fa-pen-to-square"></i></button> 
        <button class="note-menu-btn note-menu-trash-btn" @click="deleteNote"><i class="fa-solid fa-trash"></i></button>
        </section>
    `,
    data() {
        return {
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
        },
        changeNoteColor(color) {
            const newNote = JSON.parse(JSON.stringify(this.note))
            newNote.style.backgroundColor = '#' + color
            eventUpdateNote(newNote)
        },
        editNote() {
            this.$emit('openNoteEdit')
        }
    },
    computed: {
        pinned() {
            return { pinned: this.note.isPinned }
        }
    },
    unmounted() { },
    components: {
        noteColorSelect
    }
};