import { noteService } from '../services/note.service.js'
import createNote from '../cmps/note-create.cmp.js'
import noteList from '../cmps/note-list.cmp.js'


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
    },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        createNote,
        noteList,
    },
};