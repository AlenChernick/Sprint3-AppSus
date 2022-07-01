import { deleteMail } from "../../../services/eventBus.service.js"

export default {
  props: ["email"],
  template: `

<div class='extended-mail'>
  <div class="flex flex-row space-between" >      
     <div class="extended-mail-header"  style="font-weight:800;font-size: 1.2rem;">{{email.subject}}</div>
     <button @click="onDeleteMail(email.id)">Delete</button>
     <button>Full</button>
</div>

<div ><span style="font-weight:600;font-size:0.9rem;">{{email.name}}</span> 
<span style="color:gray;font-size:0.8rem;">{{email.name}}@gmail.com</span></div>
<br>
<div>{{email.body}}</div>
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
  computed: {},
  unmounted() {},
}
