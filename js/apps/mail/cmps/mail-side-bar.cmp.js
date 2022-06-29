export default {
 props: ["emails"],
 template: `
 <section v-if='emails'>
<div class="mail-side-bar">
<div class="inbox-btn">inbox {{CountunReaden}}</div>
<div class="starred-btn">Starred</div>
<div class="sent-btn">Sent</div>
<div class="Draft">Draft</div>
</div>
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
          return this.unReaded = this.emails.filter((email) => email.isRead === false).length
    }
},
unmounted() {},
};