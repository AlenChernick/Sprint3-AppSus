export default {
    template: `
    <section class="user-msg">
        <button class="close-user-msg" @click="closeUserMsg">X</button>
        <p clss="user-msg-details">{{msg.txt}}</p>
    </section>
    `,
    data() {
        return {
            msg: null
        };
    },
    created() { },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 2000)
        }
    },
    computed: {},
    unmounted() { },
};