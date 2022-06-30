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
        eventBus.on('eventRemoveTodo', this.removeTodo)
        eventBus.on('eventAddNote', this.addNote)
        eventBus.on('eventDeleteNote', this.deleteNote)
        eventBus.on('eventPinNote', this.togglePinnedNote)
    },
    methods: {
        // removeTodo(noteId) {
        //     noteService.remove(noteId).then(() => {
        //         noteId.info.todos.findIndex((todos) => console.log(todos.txt))
        //         // const todoIdx = noteId.info.todos.findIndex(todo => todo.id === updatedEntity.id);
        //         // entities.splice(idx, 1, updatedEntity)
        //     })
        // },
        addNote(note) {
            // console.log(this.notes)
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
        togglePinnedNote(noteId) {
            // console.log(noteId);
            noteService.togglePinnedNote(noteId)
                .then((note) => {
                    const idx = this.notes.findIndex((note) => note.id === noteId)
                    note.isPinned === true ? this.notes[idx].style.backgroundColor = 'rgba(255, 0, 0, 0.347)' : this.notes[idx].style.backgroundColor = '#eee'
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