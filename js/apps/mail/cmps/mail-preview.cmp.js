import mailExtend from "./mail-extend.js"
import { updateIsRead } from "../../../services/eventBus.service.js"

export default {
  props: ["email"],
  template: `
 <section>

     
     <!-- <div class="flex flex-row space-between email-preview"> -->
    <div class="email-preview"   @click="isExtend=!isExtend, onRemoveRead(email.id)">
       <div v-bind:class='ifReadColor'> {{email.name}} </div>
       <div v-bind:class='ifReadColor'> {{email.subject}} </div>
       <div>{{email.body}}(hard coded for now) </div>
       <div> {{email.createdAt}} </div>
         </div>
      <mail-extend v-if="isExtend"  :email='email' ></mail-extend>


 </section>
`,
  components: {
    mailExtend,
  },

  data() {
    return {
      isExtend: false,
    }
  },
  created() {},
  methods: {
    onRemoveRead(emailId){
      updateIsRead(emailId)}


  },
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
  watch:{
    // isExtend(){
    //   if(isExtend){
    //     updateIsRead(this.email.id)
    //   }
    // }


  },
  unmounted() {},
}
