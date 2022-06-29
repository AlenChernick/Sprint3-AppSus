import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const NOTE_KEY = 'notes'
const notesDb = storageService.load(NOTE_KEY) || _createDefaultNote()


export const noteService = {
    getNotes,
    createNote,
}


function getNotes() {
    return Promise.resolve(notesDb)
}

function createNote(noteInfo) {
    const note = {
        id: utilService.makeId(),
        type: noteInfo.type,
        noteType: noteInfo.noteType,
        isPinned: noteInfo.isPinned,
        info: {
            title: noteInfo.info.title,
            txt: noteInfo.info.txt,
            img: noteInfo.info.img,
            video: noteInfo.info.video,
            todo: noteInfo.info.todos,
        },
        style: {
            backgroundColor: '#fdfdfd'
        }
    }
    notesDb.unshift(note)
    storageService.store(NOTE_KEY, notesDb)
    return Promise.resolve()
}

function _createDefaultNote() {
    const notes = [
        {
            id: utilService.makeId(),
            type: 'noteText',
            noteType: 'txt',
            isPinned: false,
            info: {
                txt: 'call Esteban Jimenez'
            },
            style: {
                backgroundColor: '#ffff88'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            noteType: 'img',
            isPinned: false,
            info: {
                img: 'https://upload.wikimedia.org/wikipedia/commons/d/dd/Avatar_flower.png',
                title: 'cool artwork'
            },
            style: {
                backgroundColor: '#fdfdfd'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteTodos',
            noteType: 'todos',
            isPinned: false,
            info: {
                title: 'groceries:',
                todos: [
                    { txt: 'milk', isComplete: true, doneAt: null },
                    { txt: 'toothpaste', isComplete: false, doneAt: 187111111 },
                    { txt: 'bamba', isComplete: false, doneAt: 187111 }
                ]
            },
            style: {
                backgroundColor: '#aaffee'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteVideo',
            noteType: 'video',
            isPinned: false,
            info: {
                video: 'c2ScKSMGvtc',
            },
            style: {
                backgroundColor: '#fdfdfd'
            }

        },
        {
            id: utilService.makeId(),
            type: 'noteText',
            noteType: 'txt',
            isPinned: false,
            info: {
                txt: 'password: aligator_3'
            },
            style: {
                backgroundColor: '#ccff99'
            }
        },

        {
            id: utilService.makeId(),
            type: 'noteImg',
            noteType: 'img',
            isPinned: false,
            info: {
                img: 'https://media.giphy.com/media/kz6cm1kKle2MYkHtJF/giphy.gif',
            },
            style: {
                backgroundColor: '#ffcc88'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            noteType: 'img',
            isPinned: false,
            info: {
                img: 'https://main-designyoutrust.netdna-ssl.com/wp-content/uploads/2018/09/Bugaboos.jpg',
                title: 'spain'
            },
            style: {
                backgroundColor: '#ddbbff'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteTodos',
            noteType: 'todos',
            isPinned: false,
            info: {
                title: 'Sprint:',
                todos: [
                    { txt: 'Todos CRUD', isComplete: true, doneAt: null },
                    { txt: 'Change Note color', isComplete: true, doneAt: 187111111 },
                    { txt: 'Add Sound template', isComplete: false, doneAt: 187111 }
                ]
            },
            style: {
                backgroundColor: '#ffcc88'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteImg',
            noteType: 'img',
            isPinned: false,
            info: {
                img: 'https://media.giphy.com/media/1wqZ9MmXDPWLPuwwYI/giphy.gif',
            },
            style: {
                backgroundColor: '#ff8888'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteText',
            noteType: 'txt',
            isPinned: true,
            info: {
                txt: 'Noa wedding 08.03'
            },
            style: {
                backgroundColor: '#ddbbff'
            }
        },
        {
            id: utilService.makeId(),
            type: 'noteVideo',
            noteType: 'video',
            isPinned: false,
            info: {
                video: 'pbMwTqkKSps',
            },
            style: {
                backgroundColor: '#ffff88'
            }
        },
    ]

    storageService.store(NOTE_KEY, notes)
    return notes
}