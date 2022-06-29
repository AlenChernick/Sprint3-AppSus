import mailPreview from "../cmps/mail-preview.cmp.js"

export default {
 props: ["emails"],
  template: `
 <section>
    <ul>
        <!-- <div>{{emails}}</div> -->
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
