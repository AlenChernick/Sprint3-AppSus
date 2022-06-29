import mailPreview from "../cmps/mail-preview.cmp.js"
import mailOpenSammery from "../cmps/mail-open-sammery.js"

export default {
  props: ["emails"],
  template: `
 <section>
    <ul>
        <li v-for="email in emails" class="email-line" >
           <!-- <mail-preview :email="email" @click='selectEmail(email.id)' ></mail-preview> -->
           <mail-preview :email="email"  ></mail-preview>
           <!-- <mail-open-sammery @extend="openSammry" v-if="isMailShowSammery"><mail-open-sammery> -->
           <!-- <mail-open-sammery  v-if="isMailShowSammery"><mail-open-sammery> -->

        </li>
    </ul>
 </section>
`,
  components: {
    mailPreview,
    mailOpenSammery,
  },

  data() {
    return {
        isMailShowSammery: false,
        selectedEmailId:null,
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
