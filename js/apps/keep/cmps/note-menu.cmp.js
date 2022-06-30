export default {
    props: ['note'],
    template: `
    <section class="note-menu">
    <button class="note-menu-pin-btn" :class="isPinnedClass" @click="pinnedToggle"><i class="fa-solid fa-thumbtack"></i></button>
    </section>
    `,
    data() {
        return {
        };
    },
    created() { },
    methods: {},
    computed: {
        isPinnedClass() {
            return (this.note.isPinned) ? 'note-pin' : ''
        }
    },
    unmounted() { },
};