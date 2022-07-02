export default {
    template: `
    <section class="note-filter">
        <select v-model="filterBy.noteType" class="filter-btns" @change="filterByType">
            <option class="note-filter-txt-btn" value="txt">Text</option>
            <option class="note-filter-image-btn" value="img">Image</option>
            <option class="note-filter-video-btn" value="video">Video</option>
            <option class="note-filter-todo-btn" value="todos">Todo</option>
        </select>
    </section>
        `,
    data() {
        return {
            filterBy: {
                noteType: ''
            }
        };
    },
    created() { },
    methods: {
        filterByType() {
            this.$emit('filterByType', this.filterBy)
        }
    },
    computed: {},
    unmounted() { },
};