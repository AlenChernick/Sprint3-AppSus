import { mailService } from "../services/mail.service.js"
import mailList from "../cmps/mail-list.cmp.js"

export default {
  template: `
<section>

<p>Mail index</p>
<mail-list :emails="emails"></mail-list>

</section>
`,
  components: {
    mailList,
    mailService,
  },
  data() {
    return {
      emails:null,
    }
  },
  created() {
    mailService.getMails().then(emails => 
        
        this.emails = emails)
  },
  methods: {},
  computed: {},
  unmounted() {},
}
