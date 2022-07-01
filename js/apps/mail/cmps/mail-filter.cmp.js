// import {filterTxt} from "../../../services/eventBus.service.js"
export default {
  template: `

<section class="mail-filter">   
    <input type="text" v-model='filterBy.text' @input='onFilterby'>
    <select v-model='filterBy.state' @change='onFilterby' name="mail-state" >
       <option value="inbox">Inbox</option>
       <option value="sent">Sent</option>
       <option value="star">Star</option>
       <option value="draft">Draft</option>
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
  created() {},
  methods: {
    onFilterby() {
      //   filterTxt("filterTxt", this.text)
      this.$emit("onFilterby", {...this.filterBy})
    },
  },
  computed: {},
  unmounted() {},
}
