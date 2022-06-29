const { createApp } = Vue
import { router } from './router.js'
import appHeader from './cmps/app-header.cmp.js'

const options = {
    template: `
    <section>
        <app-header/>
        <router-view/>
    </section>
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
    components: {
        appHeader,
    },
};

const app = createApp(options)
app.use(router)
app.mount('#app')