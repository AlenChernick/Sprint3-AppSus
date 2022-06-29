import { noteService } from '../services/note.service.js'

export default {
    template: `
    <section class="create-note">
        <div class="note-create-container">
            <input class="note-txt-input" v-model="newVal" @keyup.enter="createNote" >
        </div>
    </section>
    `,
    data() {
        return {
            note: {
                type: 'noteText',
                noteType: 'txt',
                isPinned: false,
                info: null,
            },
            newVal: null,
        };
    },
    created() { },
    methods: {
        createNote() {
            const newNote = JSON.parse(JSON.stringify(this.note))
            const noteInfo = {
                txt: '',
                img: '',
                video: '',
                title: '',
                todos: null,
            }
            if (this.note.noteType === 'todos') noteInfo.title = this.newVal
            else if (this.noteType === 'video') {
                noteInfo.video = this.getId(this.newVal)
            }
            else noteInfo[this.note.noteType] = this.newVal
            newNote.info = noteInfo
            noteService.createNote(newNote)
                .then(() => {
                    this.newVal = ''
                })

        }
    },
    computed: {},
    unmounted() { },
};