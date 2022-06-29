const { createApp } = Vue
import { router } from './router.js'

const options = {
    template: `
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};

const app = createApp(options)
app.use(router)
app.mount('#app')