import { noteText, noteImg } from '../cmps/note-template.cmp.js'

export default {
    props: ['note'],
    template: `
  <section class="note-preview">
        <div class="note-type-container" :style="{backgroundColor: noteBackgroundColor}">
            <component :is="note.type"
            :class="note.type"
            :note="note">
            </component>
        </div>
    </section>
    `,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {
        noteBackgroundColor() {
            return this.note.style.backgroundColor
        }
    },
    unmounted() { },
    components: {
        noteText,
        noteImg,
    },
};