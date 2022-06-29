import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"
import mailSideBar from "../cmps/mail-side-bar.cmp.js"

export default {
  template: `
<section>

<div class="mail-main-conteiner flex flex-row">
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
  },
  methods: {},
  computed: {},
  unmounted() {},
}
