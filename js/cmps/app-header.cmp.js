export default {
    template: `
 <header class="app-header">
     <nav class="app-nav">
        <div class="app-logo">
            <img :src="imgUrl">
        </div>
        <router-link to="/" class="nav-home">Home</router-link>
        <router-link to="/mail" class="nav-mail">Mail</router-link>
        <router-link to="/keep" class="nav-keep">Keep</router-link>
    </nav>
 </header>
`,
    data() {
        return {
            imgUrl: '/img/app-logo.png'
        };
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};