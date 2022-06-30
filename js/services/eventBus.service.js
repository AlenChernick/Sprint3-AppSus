
//  2 parmas event name and a listener its a func
function on(eventName, listener) {
    //              a fun that gets the data we send
    const callListener = ({ detail }) => {
        //run the func we got with the data
        listener(detail);
    };
    //put on the window an eventListener to our custom event we created 
    window.addEventListener(eventName, callListener);// when the event trigger run our func with the data we pass
    //return a func soo we could remove the listener
    return () => {
        window.removeEventListener(eventName, callListener);
    };
}

//2 params -> eventName and data that we want to pass
function emit(eventName, data) {
    //emit a custom event with the name and the data 
    window.dispatchEvent(new CustomEvent(eventName, { detail: data }));
}




// we got 2 funcs on and emit
export const eventBus = { on, emit };




// NOTE EVENT //
// export function eventRemoveTodo(newNote, idx) {
//     emit('eventRemoveTodo', newNote, idx)
// }

// export function eventToggleTodoComplete(newNote) {
//     emit('eventToggleTodoComplete', newNote)
// }

export function eventAddTodo(newNote) {
    emit('eventAddTodo', newNote)
}

export function eventAddNote(newNote) {
    emit('eventAddNote', newNote)
}

export function eventDeleteNote(noteId) {
    emit('eventDeleteNote', noteId)
}

export function eventPinNote(noteId) {
    emit('eventPinNote', noteId)
}





// EMAIL EVENTS //
//Calling: mailExtend,
export function deleteMail(mailId) {
    emit('deletedMail', mailId)
}

export function updateIsRead(mailId) {
    emit('updateIsRead', mailId)
}

export function newMail() {
    console.log('event busd')
    emit('newMail')
}
export function sentPage() {
    console.log('event busd????')
    emit('sentPage')
}
