// import mailFullScreen from "../pages/mail-full-screen.cmp.js"
// import  progresBar  from "../../mail/cmps/progress-bar.cmp/js"
import { newMail } from "../../../services/eventBus.service.js"

export default {
  props: ["emails","mailToSend"],
  template: `
 <section class="mail-side-bar flex flex-column space-evenly" v-if='emails'>
<pre>{{sendendEmails}}</pre>
<!-- <router-link to="/fullScreenMail" class="compose-btn">
     <button>compose</button>   
    </router-link> -->
<div @click="onNewMail" class="compose-btn"><i class="fa-solid fa-plus"></i> Compose</div>
    <div class="inbox-btn side-bar-btns"> <i class="fa-solid fa-inbox"></i>  {{CountunReaden}}</div>
    <div class="starred-btn side-bar-btns"><i class="fa-solid fa-star"></i>{{CountunSent}} Starred</div>
    <div class="sent-btn side-bar-btns"><i class="fa-solid fa-share-from-square"></i> Sent</div>
    <div class="Draft side-bar-btns"><i class="fa-brands fa-firstdraft"></i> Draft</div>
<!-- <progres-bar :width="fillWidth"><progres-bar> -->

    
</section>
`,
  components: {
    // mailFullScreen,
    // progresBar,
  },
  data() {
    return {
      unReaded: 0,
      sent: 0,
    }
  },
  created() {},
  methods: {
    onNewMail() {
      console.log("onNewMail side bar")
      newMail("newMail") //eventbus
    },
  },
  computed: {
    CountunReaden() {
      return (this.unReaded =
        "inbox " + this.emails.filter((email) => email.isRead === false).length)
    },
    CountunSent() {
      return (this.mailToSend.length)
     
    },
  },

  unmounted() {},
}
