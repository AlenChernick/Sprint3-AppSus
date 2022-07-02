import { mailService } from "../services/mail.service.js"
import { eventBus } from "../../../services/eventBus.service.js"
import { utilService } from "../../../services/util.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailSideBar from "../cmps/mail-side-bar.cmp.js"
import mailFilter from "../cmps/mail-filter.cmp.js"
import composeMail from "../cmps/compose-mail.cmp.js"

export default {
  name: "index-Mail",
  template: `
<section >

  <mail-filter @filtered="setFilter" ></mail-filter>
<div class="mail-main-conteiner flex">
    <mail-side-bar :emails="emails" @filtered="setFilter" ></mail-side-bar>
    <mail-list :emails="emailsToShow" ></mail-list>
  </div>

  <div v-if="newMailModl">
      <compose-mail @sended="onSendMail" @canceled="onDraft"/>
  </div>
</section>


`,
  components: {
    mailList,
    mailService,
    mailSideBar,
    utilService,
    mailFilter,
    composeMail,
  },
  data() {
    return {
      emails: null,
      filter: "inbox",
      text: "",
      newMailModl: false,
      filterBy: {
        txt: "",
        state: "",
        read: "",
        stared: "",
      },
    }
  },
  created() {
    mailService.getMails().then((emails) => (this.emails = emails))

    eventBus.on("deletedMail", this.onDeleteMail) //iniialize event listener
    eventBus.on("updateIsRead", this.updateIsRead) //iniialize event listener
    eventBus.on("newMail", this.newMail) //iniialize event listener
    eventBus.on("addStar", this.addStar) //iniialize event listener
    eventBus.on("updateUnRead", this.updateUnRead) //iniialize event listener
    eventBus.on("updateUnRead", this.updateUnRead) //iniialize event listener
    eventBus.on("eventSentNoteToMail", this.eventSentNoteToMail) //iniialize event listener

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

    onDraft() {
      console.log("Drafted")
      this.newMailModl = !this.newMailModl
    },
    updateIsRead(emailId) {
      this.emails = mailService.updateIsRead(emailId)
    },
    updateUnRead(emailId) {
      this.emails = mailService.updateIsUnRead(emailId)
    },
    newMail() {
      this.newMailModl = true
    },
    onSendMail(newMail) {
      this.newMailModl = !this.newMailModl
      // if(this.mailToSen.to=== null || this.mailToSen.subject===null ) return//this part invoke vue Unhandled error
      mailService
        .saveMail(newMail)
        .then((sendedMail) => this.emails.push(sendedMail))
      // this.emails = mailService.saveMail(this.mailToSend)
    },
    onCancelMail() {
      this.newMailModl = !this.newMailModl
    },

    addStar(emailId) {
      mailService.updateIsStar(emailId).then((emails) => (this.emails = emails))
    },
    // filterby(filter) {
    //   this.text = filter.text.toUpperCase()
    //   this.filter = filter.state
    // },
    eventSentNoteToMail(){
      mailService.getMails().then((emails) => (this.emails = emails))
    },
  

    setFilter({ txt, state, read, stared }) {
      if (txt) {
        this.filterBy.txt = txt
        if (txt === "all") this.filterBy.txt = ""
      }
      if (state) this.filterBy.state = state
      if (read) {
        this.filterBy.read = read
        if (read === "all") this.filterBy.read = ""
      }
      this.filterBy.stared = stared
    },
  },
  computed: {
    emailsToShow() {
      if (!this.emails) return

      let emails = this.emails
      const { txt, state, stared, read } = this.filterBy
      if (txt) {
        const regex = new RegExp(txt, "i")
        emails = emails.filter((email) => {
          return (
            regex.test(email.name) ||
            regex.test(email.subject) ||
            regex.test(email.body)
          )
        })
      }

      if (state) {
        emails = emails.filter((email) => email.state === state)
      }
      if (stared) {
        emails = emails.filter((email) => email.isStar)
      }
      if (read) {
        if (read === "read") emails = emails.filter((email) => email.isRead)
        else emails = emails.filter((email) => !email.isRead)
      }

      return emails
      // if (this.filter === "star")
      //   emails = emails.filter(
      //     (mail) => mail.isStar === true && mail.name.includes(this.text)
      //   )
      // if (this.filter === "read")
      //   emails = emails.filter(
      //     (mail) => mail.isRead === true && mail.name.includes(this.text)
      //   )
      // if (this.filter === "unread")
      //   emails = emails.filter(
      //     (mail) => mail.isRead === false && mail.name.includes(this.text)
      //   )
      // return this.emails.filter((mail) => this.filter === mail.state )
      // emails = emails.filter(
      //   (mail) =>
      //     this.filter === mail.state &&
      //     mail.name.toUpperCase().includes(this.text)
      // )
      return emails
      // return tempArr.filter((mail) => mail.name.includes(this.text))
    },
  },
  unmounted() {},
}
