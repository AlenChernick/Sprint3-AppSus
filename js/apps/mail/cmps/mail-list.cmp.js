import mailPreview from "../cmps/mail-preview.cmp.js"
import mailOpenSammery from '../cmps/mail-open-sammery.js'


export default {
 props: ["emails"],
  template: `
 <section>
    <ul>
        <li v-for="email in emails" class="email-line">
           <mail-preview :email="email"></mail-preview>
        </li>
    </ul>
 </section>
`,
  components: {
    mailPreview,
  },

  data() {
    return {}
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
}
