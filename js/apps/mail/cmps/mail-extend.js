import { deleteMail } from "../../../services/eventBus.service.js"

export default {
  props: ["email"],
  template: `

<div class="extended-mail">
  <div class="extended-mail-header">
    <div  class="extended-mail-title" style="font-weight: 800; font-size: 1.2rem"> {{email.subject}} </div>
    <button class="extended-delete" @click="onDeleteMail(email.id)"><i class="fa-solid fa-trash"></i>    </button>
   </div>

  <div class="extend-mail-content">
    <span style="font-weight: 600; font-size: 0.9rem">{{email.name}}</span>
    <span style="color: gray; font-size: 0.8rem">{{getEmailAdress}}</span>
    <br />
    <div class="extend-mail-body">{{email.body}}</div>
  </div>
</div>

`,
  data() {
    return {}
  },
  created() {},
  methods: {
    onDeleteMail(emailId) {
      deleteMail(emailId) //eventbus
    },
  },
  computed: {
    getEmailAdress(){
return '\xa0\xa0\xa0\xa0  <'+ this.email.name + '@gmail.com>'

    }
  },
  unmounted() {},
}
