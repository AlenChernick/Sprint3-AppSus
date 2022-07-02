// import {filterTxt} from "../../../services/eventBus.service.js"
import { eventBus } from "../../../services/eventBus.service.js"

export default {
  template: `

<section class="mail-filter">
    <input type="text" v-model='txt' @input='onFilterby' placeholder="Search Mail">
    <select v-model='read' @change='onFilterby' name="mail-state" >
       <option value="all">All</option> 
       <option value="read">Read</option>
       <option value="unread">Unread</option>

    </select>
 </section>

 `,
  data() {
    return {
        txt: "",
        read: "",
      
    }
  },
  created() {
    // eventBus.on("sentPage", this.sentPage) //iniialize event listener
    // eventBus.on("inboxPage", this.inboxPage) //iniialize event listener
    // eventBus.on("starPage", this.starPage) //iniialize event listener
    // eventBus.on("draftPage", this.draftPage) //iniialize event listener
  },
  methods: {
    onFilterby() {
      //   filterTxt("filterTxt", this.text)
      const filterBy={
        read:this.read,
        txt:this.txt || 'all',
      }
      this.$emit("filtered",filterBy)
    },
    //     sentPage(){
    //       this.filterBy.state = 'sent'
    //   },
    //   inboxPage(){
    //     this.filterBy.state = 'inbox'
    // },
    // starPage(){
    //   this.filterBy.state = 'star'
    // },
    // draftPage(){
    //   console.log('draft');
    //   this.filterBy.state = 'draft'
    // },
  },
  computed: {},
  unmounted() {},
}
