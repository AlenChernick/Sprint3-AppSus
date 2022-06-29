import mailPreview from "../cmps/mail-preview.cmp.js"

export default {
  props: ["emails"],
  template: `
 <section>
    <ul>
        <li v-for="email in emails" class="email-line" >
           <mail-preview :email="email"  ></mail-preview>
        </li>
    </ul>
 </section>
`,
  components: {
    mailPreview,
  },

  data() {
    return {
      isMailShowSammery: false,
      selectedEmailId: null,
    }
  },
  created() {},
  methods: {
    //     selectEmail(emailId){
    //         console.log('dsf');
    //         this.selectedEmailId === emailId
    //         this.isMailShowSammery=true
    //  }
  },
  computed: {},
  unmounted() {},
}
