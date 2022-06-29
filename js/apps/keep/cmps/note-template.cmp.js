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

export const noteTodos = {
    template: `
    <section class="note-template note-todos" v-if="note">
        <h2 class="info-txt">{{note.info.title}}</h2>
        <ul v-if="note.info.todos" class="todos-ul">
            <li v-for="(todo, idx) in note.info.todos"
            @click="toggleTodoFinished(idx)"
            :class="{'todo-finished' : todo.isFinished, 'todo-unfinished': !todo.isFinished}"
            class="todo-li">
            {{todo.txt}}
            <button @click.stop="removeTodo(idx)" class="todo-remove-btn">X</button>
            </li>
        </ul>
        <input @keyup.enter="addTodo" v-model="nextTodo" class="next-todo-input" placeholder="To do.."/>
    </section>
    `,
    data() {
        return {
            nextTodo: '',
        }
    },
    methods: {
        addTodo() {
            const todo = {
                text: this.nextTodo,
                isFinished: false,
            }
            if (!this.note.info.todos) this.note.info.todos = []
            this.note.info.todos.push(todo)
            const newNote = this.createNoteCopy()
            this.$emit(eventAddNewTodo, newNote)
            this.nextTodo = ''
        },
        removeTodo(idx) {
            const newNote = this.createNoteCopy()
            this.$emit(eventRemoveTodo, newNote, idx)
        },
        toggleTodoFinshed(todoIdx) {
            this.note.info.todos[todoIdx].isFinished = !this.note.info.todos[todoIdx].isFinished
            const newNote = this.createNoteCopy()
            this.$emit(eventToggleTodo, newNote)
        },
        createNoteCopy() {
            return JSON.parse(JSON.stringify(this.note))
        }
    },
    props: ['note']
}

export const noteVideo = {
    template: `
        <section class="note-template note-video">
            <h2 v-if="note.info.title" class="info-txt">{{note.info.title}}</h2>

            <iframe width="100%"
            :src="videoSrcLink" 
           

            frameborder="0" allow="accelerometer; autoplay; 
            encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </section>
    `,
    props: ['note'],
    methods: {
        getId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);

            return (match && match[2].length === 11)
                ? match[2]
                : null;
        }
    },
    computed: {
        videoSrcLink() {
            let url = 'https://www.youtube.com/embed/' + this.note.info.video
            return url
        }
    }
}