import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailSideBar from "../cmps/mail-side-bar.cmp.js"
import mailFilter from "../cmps/mail-filter.cmp.js"
import { eventBus } from "../../../services/eventBus.service.js"
import { utilService } from "../../../services/util.service.js"

export default {
  template: `
<section>

  <mail-filter @onFilterby="filterby" ></mail-filter>
<div class="mail-main-conteiner flex">
  <!-- <mail-side-bar :mailsObj="mailsObj"></mail-side-bar> -->
    <mail-side-bar :emails="emails" ></mail-side-bar>
    <mail-list :emails="emailsToShow" ></mail-list>
    <!-- <pre>{{mailToSend}}</pre> -->
  </div>
    <div v-if="newMailModl" class="new-mail-modal">
    <div class="mail-modal-header flex space-between">
      <div>New Message</div>
      <button class="send-btn">Trow</button>
    </div>
    <form class="new-mail-content flex flex-column">
      <div class="mail-input-conteiner">
        <label for="To">To</label>
        <input
          class="mail-inputs"
          v-model="mailToSend.to"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="mail-input-conteiner">
        <label for="Cc">Cc</label>
        <input
          class="mail-inputs"
          v-model="mailToSend.cc"
          type="cc"
          name=""
          id=""
        />
      </div>
      <div class="mail-input-conteiner">
        <label for="To">Bcc</label>
        <input
          class="mail-inputs"
          v-model="mailToSend.bcc"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="mail-input-conteiner">
        <label for="subject">subject</label>
        <input
          class="mail-inputs"
          v-model="mailToSend.subject"
          type="text"
          name=""
          id=""
        />
      </div>
      <div class="mail-body-input">
        <label for="mailBody"></label>
        <textarea
          class="mail-body-input"
          v-model="mailToSend.body"
          rows="26"
          cols="50"
          name=""
          id=""
        >
        </textarea>
      </div>
      <div class="send-delete-row flex space-between">
        <div  class="send-btn"  @click="onSendMail"><i class="fa-solid fa-paper-plane"></i></div>

        <div class="garbage-btn"  @click="onCancelMail"><i class="fa-solid fa-trash-can"></i></div>
        
      </div>
    </form>
  </div>
</section>


`,
  components: {
    mailList,
    mailService,
    mailSideBar,
    utilService,
    mailFilter,
  },
  data() {
    return {
      emails: null,
      filter: "inbox",
      text: "",
      newMailModl: false,
      mailToSend: {
        name: "me",
        to: null,
        cc: null,
        bbc: null,
        subject: null,
        body: null,
        createdAt: utilService.getFormattedNowDate(),
        isRead: true,
        state: "sent",
        to: null,
        cc: null,
        bbc: null,
        isStar: false,
      },
    }
  },
  created() {
    mailService.getMails().then((emails) => (this.emails = emails))

    eventBus.on("deletedMail", this.onDeleteMail) //iniialize event listener
    eventBus.on("updateIsRead", this.updateIsRead) //iniialize event listener
    eventBus.on("newMail", this.newMail) //iniialize event listener
    eventBus.on("sentPage", this.sentPage) //iniialize event listener
    eventBus.on("inboxPage", this.inboxPage) //iniialize event listener
    eventBus.on("starPage", this.starPage) //iniialize event listener
    eventBus.on("draftPage", this.draftPage) //iniialize event listener
    eventBus.on("addStar", this.addStar) //iniialize event listener
    eventBus.on("updateUnRead", this.updateUnRead) //iniialize event listener

  },
  methods: {
    onDeleteMail(emailId) {
      mailService
        .removeEmail(emailId)
        .then((emails) => {
          this.emails = emails
          // showSuccessMsg('Deleted successfully')
        })
        .catch((err) => {
          console.log("errer")
          // showErrorMsg('Failed to remove')
        })
    },
    updateIsRead(emailId) {
      this.emails = mailService.updateIsRead(emailId)
    },
    updateUnRead(emailId){
      this.emails = mailService.updateIsUnRead(emailId)
    },
    newMail() {
      this.newMailModl = true
    },
    onSendMail() {
      this.newMailModl = !this.newMailModl
      // if(this.mailToSen.to=== null || this.mailToSen.subject===null ) return//this part invoke vue Unhandled error
      mailService
        .saveMail(this.mailToSend)
        .then((sendedMail) => this.emails.push(sendedMail))
    },
    onCancelMail() {
      this.newMailModl = !this.newMailModl
    },
    sentPage() {
      this.filter = "sent"
    },
    inboxPage() {
      this.filter = "inbox"
    },
    draftPage() {
      this.filter = "draft"
    },
    starPage() {
      this.filter = "star"
    },
    addStar(emailId) {
      mailService.updateIsStar(emailId).then((emails) => (this.emails = emails))
    },
    filterby(filter) {
      this.text = filter.text.toUpperCase()
      this.filter = filter.state
    },
  },
  computed: {
    emailsToShow() {
      if (this.filter === "star") return this.emails.filter((mail) => mail.isStar === true && mail.name.includes(this.text)
      )
      if (this.filter === "read") return this.emails.filter((mail) => mail.isRead === true && mail.name.includes(this.text)
      )
      if (this.filter === "unread") return this.emails.filter((mail) => mail.isRead === false && mail.name.includes(this.text)
      )
      // return this.emails.filter((mail) => this.filter === mail.state )
      return this.emails.filter((mail) => this.filter === mail.state && mail.name.toUpperCase().includes(this.text)
      )

      // return tempArr.filter((mail) => mail.name.includes(this.text))
    },
  },
  unmounted() { },
}
