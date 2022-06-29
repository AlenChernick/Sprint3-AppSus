
export default {
  props: ["email"],
  template: `
 <section>

     
     <!-- <div class="flex flex-row space-between email-preview"> -->
    <div class="email-preview">
       <div v-bind:class='ifReadColor'> {{email.name}} </div>
       <div v-bind:class='ifReadColor'> {{email.subject}} </div>
       <div>{{email.body}}(hard coded for now) </div>
       <div> {{email.createdAt}} </div>
   </div>

 </section>
`,
  components: {
  },

  data() {
    return {}
  },
  created() {},
  methods: {
    mailExtend(mailId){
        console.log('mail-rev');
        this.$emit('extend',mailId)
    }
  },
  computed: {
    ifReadColor() {
        return {
          "reded":  this.email.isRead === true,
          "un-readed":  this.email.isRead === false,
        }
      },
  },
  unmounted() {},
}
