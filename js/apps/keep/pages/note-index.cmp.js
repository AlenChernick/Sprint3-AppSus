import { noteService } from '../services/note.service.js'
import createNote from '../cmps/note-create.cmp.js'
import noteList from '../cmps/note-list.cmp.js'
import { eventBus } from '../../../services/eventBus.service.js'


export default {
    template: `
    <section class="note-app">
        <create-note/>
        <note-list :notes="notes"></note-list>
    </section>
`,
    data() {
        return {
            notes: null,
        };
    },
    created() {
        noteService.getNotes()
            .then(notes => {
                this.notes = notes
            })

        eventBus.on('eventAddNote', this.addNote)
        eventBus.on('eventDeleteNote', this.deleteNote)
        eventBus.on('eventUpdateNote', this.updateNote)
    },
    methods: {

        addNote(note) {
            noteService.addNote(note)
                .then((note) => this.notes.unshift(note))
        },
        deleteNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === noteId)
                    this.notes.splice(idx, 1)
                })
        },
        updateNote(updatedNote) {
            noteService.save(updatedNote)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === updatedNote.id)
                    this.notes.splice(idx, 1, updatedNote)
                })
        }

    },
    computed: {},
    unmounted() { },
    components: {
        createNote,
        noteList,
    },
};