export default {
 props: ["emails"],
 template: `
 <section>

<div class="inbox-btn">inbox {{CountunReaden}}</div>
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
// console.log(this.emails);    
          return this.unReaded = this.emails.filter((email) => {email.isRead === false}).length
    }
},
unmounted() {},
};