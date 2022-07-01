import {
  newMail,
  sentPage,
  inboxPage,
  starPage,
  draftPage,
} from "../../../services/eventBus.service.js"

export default {
  props: ["emails"],
  template: `
 <section class="mail-side-bar flex flex-column space-evenly" v-if='emails'>

<div @click="onNewMail" class="compose-btn"><i class="fa-solid fa-plus"></i> Compose</div>
    <div @click="onInboxPage" class="inbox-btn side-bar-btns">  <i class="fa-solid fa-inbox"></i> \xa0{{spaceStr}} {{CountunReaden}}</div>
    <div   @click="onStarPage" class="starred-btn side-bar-btns"><i class="fa-solid fa-star"></i>{{spaceStr}} Starred {{ CountunStar}}</div>
    <div  @click="onSentPage" class="sent-btn side-bar-btns"><i class="fa-solid fa-share-from-square"></i>{{spaceStr}} Sent  {{CountunSent}} </div>
    <div   @click="onDraftPage" class="Draft side-bar-btns"><i class="fa-brands fa-firstdraft"></i>\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Draft {{CountunDraft}}</div>

    
</section>
`,
  components: {},
  data() {
    return {
      unReaded: 0,
      sent: 0,
      star: 0,
      spaceStr: `\xa0\xa0\xa0\xa0\xa0`
    }
  },
  created() { },
  methods: {
    onNewMail() {
      newMail("newMail") //eventbus
    },

    onSentPage() {
      sentPage("sentPage") //eventbus
    },
    onInboxPage() {
      inboxPage("inboxPage") //eventbus
    },
    onDraftPage() {
      draftPage("draftPage") //eventbus
    },
    onStarPage() {
      starPage("starPage") //eventbus
    },
  },
  computed: {
    CountunReaden() {
      return ("Inbox " + this.emails.filter((email) => email.state === "inbox").length)
    },
    CountunSent() {
      return this.emails.filter((mail) => mail.state === "sent").length
    },
    CountunStar() {
      return this.emails.filter((mail) => mail.isStar === true).length
    },
    CountunDraft() {
      return this.emails.filter((mail) => mail.state === "draft").length
    },
  },

  unmounted() { },
}
