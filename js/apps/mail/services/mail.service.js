import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/storage.service.js'

const MAIL_KEY = "mail_db"
const mails = storageService.load(MAIL_KEY) ||  _createMails()

export const mailService = {
    getMails

}



function getMails(){
    return Promise.resolve(mails)
}

function _createMails(){
   const genericMails =  [
            {
              name: "alen",
              title:'Lets start!',
              txt: "hay there!!!",
              createdAt: " date.now()",
            },
            {
              name: "alon",
              title:'need help??',
              txt: "shity day!!!",
              createdAt: " date.now()",
            }
        ]
        const mails = genericMails
        storageService.store(MAIL_KEY, mails)
        return genericMails
}

