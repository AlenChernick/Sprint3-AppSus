
export default {
  props: ["email"],
  template: `
 <section>

     
     <!-- <div class="flex flex-row space-between email-preview"> -->
    <div class="email-preview">
       <div> {{email.name}} </div>
       <div> {{email.title}} </div>
       <div> small text(hard coded for now) </div>
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
  methods: {},
  computed: {},
  unmounted() {},
}
