import mailOpenSammery from "../cmps/mail-open-sammery.js"

export default {
  props: ["email"],
  template: `
 <section>

     
     <!-- <div class="flex flex-row space-between email-preview"> -->
    <div class="email-preview"   @click="isExtend=!isExtend">
       <div v-bind:class='ifReadColor'> {{email.name}} </div>
       <div v-bind:class='ifReadColor'> {{email.subject}} </div>
       <div>{{email.body}}(hard coded for now) </div>
       <div> {{email.createdAt}} </div>
         </div>
      <mail-open-sammery v-if="isExtend"  :email='email' ></mail-open-sammery>


 </section>
`,
  components: {
    mailOpenSammery,
  },

  data() {
    return {
      isExtend: false,
    }
  },
  created() {},
  methods: {},
  computed: {
    ifReadColor() {
      return {
        reded: this.email.isRead === true,
        "un-readed": this.email.isRead === false,
      }
    },
    onExtend() {
      return true
    },
  },
  unmounted() {},
}
