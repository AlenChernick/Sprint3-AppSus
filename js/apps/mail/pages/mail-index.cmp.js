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
      emails: [
        {
          name: "alen",
          title:'Lets start!',
          txt: "hay there!!!",
          createdAt: " date.now()",
        },
        {
          name: "alon",
          title:'need help??',
          txt: "shity day!!!",
          createdAt: " date.now()",
        },
      ],
    }
  },
  created() {
    // this.emails = {
    //   name: "alen",
    //   txt: "hay there!!!",
    //   date: " date.now()",
    // }
  },
  methods: {},
  computed: {},
  unmounted() {},
}
