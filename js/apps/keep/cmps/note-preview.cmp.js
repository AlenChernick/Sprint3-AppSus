import { noteText, noteImg } from '../cmps/note-template.cmp.js'

export default {
    props: ['note'],
    template: `
        <section class="note-preview">
        <div class="note-type-container">
            <component :is="note.type"
            :class="note.type"
            :note="note">
            </component>
    </section>
    `,
    data() {
        return {};
    },
    created() {

    },
    methods: {},
    computed: {},
    unmounted() { },
    component: {
        noteText,
        noteImg,
    }
};