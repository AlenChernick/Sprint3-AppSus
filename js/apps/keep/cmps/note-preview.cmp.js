import { noteText, noteImg, noteTodos, noteVideo } from '../cmps/note-template.cmp.js'
import noteMenu from '../cmps/note-menu.cmp.js'

export default {
    props: ['note'],
    template: `
  <section v-if="note" class="note-preview">
        <div class="note-type-container" :style="noteBackgroundColor">
            <component :is="note.type"
            :class="note.type"
            :note="note">
            </component>
        </div>
        <note-menu :note="note"/>
    </section>
    `,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {
        noteBackgroundColor() {
            return { backgroundColor: this.note.style.backgroundColor }
        }
    },
    unmounted() { },
    components: {
        noteText,
        noteImg,
        noteTodos,
        noteVideo,
        noteMenu
    },
};