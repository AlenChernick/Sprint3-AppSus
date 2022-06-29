import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

const MAIL_KEY = "mail_db"
const mails = storageService.load(MAIL_KEY) || _createMails()

export const mailService = {
  getMails,
  removeEmail
}




function getMails() {
  return Promise.resolve(mails)
}

function removeEmail(emailId) {
  const idx = mails.findIndex(email => email.id === emailId)
  // const fromName = mails[idx].from || ''
  mails.splice(idx, 1)
  storageService.store(MAIL_KEY, mails)
  const newArr = storageService.load(MAIL_KEY) 
  if(!newArr.length)  _createMails()
  return Promise.resolve(newArr)
}

function _createMails() {
  
  const genericMails = [
    {
      id: utilService.makeId(),
      name: "Alen",
      subject: "Lets start!",
      body: "hay there!!! what about to...",
      to: 'momo@momo.com',
      createdAt: utilService.getFormattedNowDate(),
      isRead: false,
    },
    {
      id: utilService.makeId(),
      name: "Alon",
      subject: "Need help??",
      body: "shity day!!! i cant find t...",
      to: 'momo@momo.com',
      createdAt: "2021-02-23",
      isRead: true,
    },
    {
      id: utilService.makeId(),
      name: "Shiran",
      subject: "Sorry!",
      body: "sososo sorry for deleti...",
      to: 'momo@momo.com',
      createdAt: "2022-05-7",
      isRead: false,

    },
    {
      id: utilService.makeId(),
      name: "Guy",
      subject: "Last call",
      body: "Dear jhon, i waited to...",
      to: 'momo@momo.com',
      createdAt: "2022-06-2",
      isRead: true,
    },
        {
      id: utilService.makeId(),
      name: "James",
      subject: "alibaba is going crazy",
      body: "fsd rtg sadsd rgfgfsdae lkgf...",
      to: 'momo@momo.com',
      createdAt: "2021-02-23",
      isRead: true,
    },
    {
      id: utilService.makeId(),
      name: "Shiran",
      subject: "I need to denied your permission",
      body: "According the latest roles on...",
      to: 'momo@momo.com',
      createdAt: "2022-06-29",
      isRead: false,

    },
    {
      id: utilService.makeId(),
      name: "Dor",
      subject: "Come and vote!",
      body: "Its the final countdown!!come...",
      to: 'momo@momo.com',
      createdAt: "2022-06-2",
      isRead: true,
    },
  ]
  const mails = genericMails
  storageService.store(MAIL_KEY, mails)
  return genericMails
}

// const names = ['Alon','Dor','Yael','Sarit','Alen','Guy','Yuval',
//          'Denis','Kai','Alon','Dor','Yael','Sarit','Alen',
//          'Guy','Yuval','Denis','Kai']