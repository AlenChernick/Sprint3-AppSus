import mailExtend from "./mail-extend.js"
import longText from "./long-text.cmp.js"
import { updateIsRead, addStar } from "../../../services/eventBus.service.js"

export default {
  props: ["email"],
  template: `
 <section>

     
     <!-- <div class="flex flex-row space-between email-preview"> -->
    <div class="email-preview"   @click="isExtend=!isExtend, onRemoveRead(email.id)">
      <div class="star" :class="addStarColor" @click='onAddStar(email.id)'><i class="fa-solid fa-star"></i></div>
       <div v-bind:class='ifReadColor'> {{email.name}} </div>
       <div v-bind:class='ifReadColor'> {{email.subject}} </div>
       <!-- <div>{{email.body}}(hard coded for now) </div> -->
       <long-text v-bind:class='ifReadColor' :text="email.body"></long-text>
       <div> {{email.createdAt}} </div>
         </div>
      <mail-extend v-if="isExtend"  :email='email' ></mail-extend>


 </section>
`,
  components: {
    mailExtend,
    longText
  },

  data() {
    return {
      isExtend: false,
      // isStar:false,
    }
  },
  created() {
    // this.isStar = this.email.isStar


  },
  methods: {
    onRemoveRead(emailId) {
      updateIsRead(emailId)
    },
    onAddStar(emailId) {
      addStar(emailId)
    },
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
    addStarColor(){
      return {
        'is-star-on':this.email.isStar,
        // 'is-star-off': !this.email.isStar,
      }
    }
  },
  watch: {
    // isExtend(){
    //   if(isExtend){
    //     updateIsRead(this.email.id)
    //   }
    // }
  },
  unmounted() {},
}
