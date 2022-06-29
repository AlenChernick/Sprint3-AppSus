export default {
 props: ["emails"],
 template: `
 <section class="mail-side-bar" v-if='emails'>

<div class="inbox-btn"> {{CountunReaden}}</div>
<div class="starred-btn">Starred</div>
<div class="sent-btn">Sent</div>
<div class="Draft">Draft</div>

 </section>
`,
data() {
return {
    unReaded:0,
};
},
created() {},
methods: {},
computed: {
    CountunReaden(){
          return this.unReaded = 'inbox '+this.emails.filter((email) => email.isRead === false).length
    }
},
unmounted() {},
};