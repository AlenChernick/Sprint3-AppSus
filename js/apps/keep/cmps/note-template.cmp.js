export const noteText = {
    template: `
    <section class="note-template note-text">
        <p class="info-txt">{{note.info.txt}}</p>
    </section>
    `,
    props: ['note']
}

export const noteImg = {
    template: `
        <section class="note-template note-img">
            <h2 v-if="note.info.title" class="info-txt">{{note.info.title}}</h2>
            <img :src="note.info.img" />
        </section>
    `,
    props: ['note'],
}