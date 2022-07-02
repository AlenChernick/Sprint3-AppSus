import { updateUnRead,closeExtendForUnread } from "../../../services/eventBus.service.js"

export default {
    props:['emailId'],
 template: `
 <section class="extended-options-modal">
    <div><i class="fa-solid fa-reply"></i> Replay</div>
    <div @click='onMarkUnread(emailId)'><i class="fa-solid fa-envelope" ></i> Mark as unread</div>
    <div><i class="fa-solid fa-share-from-square"></i>Send to notes</div>
    <!-- <div>Remove</div> -->
 </section>
 
`,
components:{
    
},
data() {
return {};
},
created() {},
methods: {
    onMarkUnread(emailId){
        updateUnRead(emailId)
        closeExtendForUnread('closeExtendForUnread')
    },
},
computed: {},
unmounted() {},
};