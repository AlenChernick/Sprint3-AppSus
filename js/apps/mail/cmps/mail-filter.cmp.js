// import {filterTxt} from "../../../services/eventBus.service.js"
import { eventBus } from "../../../services/eventBus.service.js"

export default {
  template: `

<section class="mail-filter">
    <input type="text" v-model='filterBy.text' @input='onFilterby' placeholder="Search Mail">
    <select v-model='filterBy.state' @change='onFilterby' name="mail-state" >
       <option value="inbox">Inbox</option>
       <option value="sent">Sent</option>
       <option value="star">Star</option>
       <option value="draft">Draft</option>
       <option value="read">Read</option>
       <option value="unread">Unread</option>

    </select>
 </section>

 `,
  data() {
    return {
      //   text: "",
      filterBy: {
        text: "",
        state: "inbox",
      },
    }
  },
  created() {
    eventBus.on("sentPage", this.sentPage) //iniialize event listener
    eventBus.on("inboxPage", this.inboxPage) //iniialize event listener
    eventBus.on("starPage", this.starPage) //iniialize event listener
    eventBus.on("draftPage", this.draftPage) //iniialize event listener
   },
  methods: {
    onFilterby() {
      //   filterTxt("filterTxt", this.text)
      this.$emit("onFilterby", { ...this.filterBy })
    },
    sentPage(){
      this.filterBy.state = 'sent'
  },
  inboxPage(){
    this.filterBy.state = 'inbox'
},
starPage(){
  this.filterBy.state = 'star'
},
draftPage(){
  console.log('draft');
  this.filterBy.state = 'draft'
},
  },
  computed: {
},
  unmounted() { },
}
