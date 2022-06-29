export default {
    template: `
 <header class="app-header">
    <div class="app-logo">
        <h2>AppSus</h2>
    </div>
    <nav class="app-nav">
        <router-link to="/" class="nav-home">Home</router-link>
        <router-link to="/mail" class="nav-mail">Mail</router-link>
        <router-link to="/keep" class="nav-keep">Kepp</router-link>
    </nav>
 </header>
`,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};