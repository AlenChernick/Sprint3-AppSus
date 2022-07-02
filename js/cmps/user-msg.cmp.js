
import { eventBus } from "../services/eventBus.service.js"


export default {
    template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <p>{{msg.txt}}</p>
        </section>
    `,
    data() {
        return {
            unsubscribe: null,
            msg: null
        };
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg)
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 2000)
        }
    },
    computed: {},
    destroyed() {
        this.unsubscribe()
    },
};

// export default {
//     template: `
//     <section class="user-msg">
//         <button class="close-user-msg" @click="closeUserMsg">X</button>
//         <p clss="user-msg-details">{{msg.txt}}</p>
//     </section>
//     `,
//     data() {
//         return {
//             msg: null
//         };
//     },
//     created() { },
//     methods: {
//         showMsg(msg) {
//             this.msg = msg
//             setTimeout(() => {
//                 this.msg = null
//             }, 2000)
//         }
//     },
//     computed: {},
//     unmounted() { },
// };