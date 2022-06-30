// import mailFullScreen from "../pages/mail-full-screen.cmp.js"
import { newMail } from "../../../services/eventBus.service.js"

export default {
  props: ["emails"],
  template: `
 <section class="mail-side-bar" v-if='emails'>

<!-- <router-link to="/fullScreenMail" class="compose-btn">
     <button>compose</button>   
    </router-link> -->
<button @click="onNewMail">compose</button>
    <div class="inbox-btn"> {{CountunReaden}}</div>
    <div class="starred-btn">Starred</div>
    <div class="sent-btn">Sent</div>
    <div class="Draft">Draft</div>
</section>
`,
components:{
    // mailFullScreen,
  },
  data() {
    return {
      unReaded: 0,
    }
  },
  created() {},
  methods: {
    onNewMail() {
        console.log('onNewMail side bar');
        newMail('newMail') //eventbus
      },
  },
  computed: {
    CountunReaden() {
      return (this.unReaded =
        "inbox " + this.emails.filter((email) => email.isRead === false).length)
    },
  },
  unmounted() {},
}
