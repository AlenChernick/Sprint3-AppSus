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
                console.log(notes);
            })
        eventBus.on('eventRemoveTodo', this.removeTodo)
    },
    methods: {
        removeTodo(note) {
            noteService.removeTodo(note)
                .then((notes) => this.notes = notes)
        }
    },
    computed: {},
    unmounted() { },
    components: {
        createNote,
        noteList,
    },
};