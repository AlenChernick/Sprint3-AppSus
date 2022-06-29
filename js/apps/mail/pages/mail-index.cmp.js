import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailSideBar from "../cmps/mail-side-bar.cmp.js"
import { eventBus } from "../../../services/eventBus.service.js"

export default {
  template: `
<section>

<div class="mail-main-conteiner flex ">
  <mail-side-bar :emails="emails"></mail-side-bar>
<mail-list :emails="emails"></mail-list>
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
    }
  },
  created() {
    mailService.getMails().then((emails) => (this.emails = emails))
    eventBus.on("deletedMail", this.onDeleteMail) //iniialize event listener
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
  },
  computed: {},
  unmounted() {},
}
