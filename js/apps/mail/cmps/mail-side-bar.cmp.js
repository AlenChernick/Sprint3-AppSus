
import { newMail,sentPage } from "../../../services/eventBus.service.js"

export default {
  props: ["emails"],
  template: `
 <section class="mail-side-bar flex flex-column space-evenly" v-if='emails'>

<div @click="onNewMail" class="compose-btn"><i class="fa-solid fa-plus"></i> Compose</div>
    <div @click="onInboxPage" class="inbox-btn side-bar-btns"> <i class="fa-solid fa-inbox"></i>  {{CountunReaden}}</div>
    <div class="starred-btn side-bar-btns"><i class="fa-solid fa-star"></i>Starred</div>
    <div  @click="onSentPage" class="sent-btn side-bar-btns"><i class="fa-solid fa-share-from-square"></i> Sent  {{CountunSent}} </div>
    <div class="Draft side-bar-btns"><i class="fa-brands fa-firstdraft"></i> Draft</div>

    
</section>
`,
  components: {

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
    
    onSentPage(){
      sentPage("sentPage") //eventbus
    }
  },
  computed: {
    CountunReaden() {
      return (this.unReaded =
        "inbox " + this.emails.filter((email) => email.isRead === false && email.state === 'inbox').length)
    },
    CountunSent() {
      return this.emails.filter(mail=> mail.state === 'sent').length
     
    }
  },

  unmounted() {},
}
