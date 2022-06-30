import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailSideBar from "../cmps/mail-side-bar.cmp.js"
import { eventBus } from "../../../services/eventBus.service.js"
import { utilService } from "../../../services/util.service.js"

export default {
  template: `
<section>

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
  },
  data() {
    return {
      emails: null,
      filter: "inbox",

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
  },
  methods: {
    onDeleteMail(emailId) {
      console.log("delete", emailId)
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
      console.log(emailId, "read")
      this.emails = mailService.updateIsRead(emailId)
    },
    newMail() {
      console.log("newMail index")
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
  },
  computed: {
    emailsToShow() {
      return this.emails.filter((mail) => this.filter === mail.state)
    },
  },
  unmounted() {},
}
