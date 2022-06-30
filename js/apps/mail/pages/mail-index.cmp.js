import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailSideBar from "../cmps/mail-side-bar.cmp.js"
import { eventBus } from "../../../services/eventBus.service.js"

export default {
  template: `
<section>
  <div class="mail-main-conteiner flex">
    <mail-side-bar :emails="emails"></mail-side-bar>
    <mail-list :emails="emails"></mail-list>
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
        <button  class="send-btn"  @click="onSendMail">Send</button>

        <!-- <button type="submit" class="send-btn">Send</button>  -->
        <button class="garbage-btn"  @click="onCancelMail">delete</button>
        
      </div>
    </form>
  </div>
</section>


`,
  components: {
    mailList,
    mailService,
    mailSideBar,
  },
  data() {
    return {
      emails: null,
      sendendEmails:null,
      newMailModl: false,
      mailToSend: {
        from: "me",
        to: null,
        cc: null,
        bbc: null,
        subject: null,
        body: null,
        isSent: true,
      },
    }
  },
  created() {
    mailService.getMails().then((emails) => (this.emails = emails))
    mailService.getSendedMails().then((sendedMails) => (this.sendendEmails = sendedMails))

    eventBus.on("deletedMail", this.onDeleteMail) //iniialize event listener
    eventBus.on("updateIsRead", this.updateIsRead) //iniialize event listener
    eventBus.on("newMail", this.newMail) //iniialize event listener
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
      if(!this.mailToSen.to || !this.mailToSen.subject ) return//this part invoke vue Unhandled error
      mailService.SendMail(this.mailToSend).then(sendedMails=> this.sendendEmails.push(sendedMails) )
    },
    onCancelMail(){
      this.newMailModl = !this.newMailModl
    }
  },
  computed: {},
  unmounted() {},
}
