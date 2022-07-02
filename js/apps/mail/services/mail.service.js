import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"
import { asyncStorageService } from "../../../services/async-storage.service.js"
import updateNoteInMail from "../../mail/pages/mail-index.cmp.js"

const MAIL_KEY = "mail_db"

const mails = storageService.load(MAIL_KEY) || _initEmails()

export const mailService = {
  getMails,
  removeEmail,
  updateIsRead,
  saveMail,
  getSendedMails,
  updateIsStar,
  updateIsUnRead,
  getMailFromNote
  // _initEmails////////////////////////////////////////////////////////////
}
function getMails() {
  return Promise.resolve(mails)
}
function getSendedMails() {
  return Promise.resolve(sendedMails)
}

function removeEmail(emailId) {
  const idx = mails.findIndex((email) => email.id === emailId)
  // const fromName = mails[idx].from || ''
  mails.splice(idx, 1)
  storageService.store(MAIL_KEY, mails)
  const newArr = storageService.load(MAIL_KEY)
  if (!newArr.length) _createMails()
  return Promise.resolve(newArr)
}

function updateIsRead(emailId) {
  const idx = mails.findIndex((email) => email.id === emailId)
  mails[idx].isRead = true
  storageService.store(MAIL_KEY, mails)
  const newArr = storageService.load(MAIL_KEY)
  if (!newArr.length) _createMails()
  return newArr
}

function updateIsUnRead(emailId) {
  // console.log('unread')
  const idx = mails.findIndex((email) => email.id === emailId)
  mails[idx].isRead = false
  storageService.store(MAIL_KEY, mails)
  const newArr = storageService.load(MAIL_KEY)
  if (!newArr.length) _createMails()
  return newArr
}

function updateIsStar(emailId) {
  const idx = mails.findIndex((email) => email.id === emailId)
  mails[idx].isStar = !mails[idx].isStar
  storageService.store(MAIL_KEY, mails)
  const newArr = storageService.load(MAIL_KEY)
  if (!newArr.length) _createMails()
  return newArr

}

function saveMail(mail) {
  return save(mail)
}

function save(mail) {
  return asyncStorageService.post(MAIL_KEY, mail)

}

function getMailFromNote(mail) {
  console.log(mail);
  saveMail(mail)
 


//   let flag = updateNoteInMail(mailFromNote)
//   console.log('gfdfdgfdg');
}



function _initEmails() {
  const names = ['Alon', 'Dor', 'Yael', 'Sarit', 'Alen', 'Guy', 'Yuval',
    'Denis', 'Kai', 'Alon', 'Dor', 'Yael', 'Sarit', 'Alen',
    'Guy', 'Yuval', 'Denis', 'Kai', 'Rami', 'Oz', 'Guy', 'Ran', 'Daniel',
    'Yaron', 'Nadav', 'Omer', 'Rami', 'Daniel', 'Yaron', 'Nadav', 'Omer']
  let emails = names.map(name => _createMails(name))
  const flagsMails = getMailsWithFlags()
  emails = emails.concat(flagsMails)
  emails[2].isStar = true
  emails[5].isStar = true
  emails[7].isStar = true
  emails[3].isRead = true
  emails[5].isRead = true
  emails[8].isRead = true
  storageService.store(MAIL_KEY, emails)
  // console.log(emails);

  return emails
}


function _createMails(name) {

  return {
    id: utilService.makeId(),
    name: name,
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    createdAt: utilService.getFormattedNowDate(),
    isRead: false,
    state: 'inbox',
    to: null,
    cc: null,
    bbc: null,
    isStar: false,
  }


}

function getMailsWithFlags() {

  const templeate = [{
    id: utilService.makeId(),
    name: "Alen",
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    to: "Alen@momo.com",
    createdAt: utilService.getFormattedNowDate(),
    isRead: false,
    state: 'sent',
    cc: null,
    bbc: null,
    isStar: false,
  }
    ,
  {
    id: utilService.makeId(),
    name: "Alon",
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    to: "Alon@momo.com",
    createdAt: "2021-02-23",
    isRead: true,
    state: 'sent',
    cc: null,
    bbc: null,
    isStar: true,
  },
  {
    id: utilService.makeId(),
    name: "Sharon",
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    to: "momo@momo.com",
    createdAt: "2022-05-7",
    isRead: false,
    state: 'draft',
    to: null,
    cc: null,
    bbc: null,
    isStar: false,
  },
  {
    id: utilService.makeId(),
    name: "Yaron",
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    to: "momo@momo.com",
    createdAt: "2022-06-2",
    isRead: true,
    state: 'draft',
    to: null,
    cc: null,
    bbc: null,
    isStar: true,
  },
  {
    id: utilService.makeId(),
    name: "James",
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    to: "momo@momo.com",
    createdAt: "2021-02-23",
    isRead: true,
    state: 'draft',
    to: null,
    cc: null,
    bbc: null,
    isStar: false,
  }, {
    id: utilService.makeId(),
    name: "Mor",
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    to: "momo@momo.com",
    createdAt: "2022-02-07",
    isRead: false,
    state: 'draft',
    to: null,
    cc: null,
    bbc: null,
    isStar: false,
  },
  {
    id: utilService.makeId(),
    name: "Eli",
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    to: "momo@momo.com",
    createdAt: "2022-06-02",
    isRead: true,
    state: 'inbox',
    to: null,
    cc: null,
    bbc: null,
    isStar: true,
  },
  {
    id: utilService.makeId(),
    name: "Redael",
    subject: utilService.makeLorem(utilService.getRandom(7, 20)),
    body: utilService.makeLorem(utilService.getRandom(100, 650)),
    to: "momo@momo.com",
    createdAt: "2020-02-03",
    isRead: true,
    state: 'inbox',
    to: null,
    cc: null,
    bbc: null,
    isStar: true,
  }]
  return templeate


}
  // const genericMails = [
  //   {
  //     id: utilService.makeId(),
  //     name: "Alen",
  //     subject: "Lets start!",
  //     body: "hay there!!! what about to...",
  //     to: "momo@momo.com",
  //     createdAt: utilService.getFormattedNowDate(),
  //     isRead: false,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Alon",
  //     subject: "Need help??",
  //     body: "shity day!!! i cant find t...",
  //     to: "momo@momo.com",
  //     createdAt: "2021-02-23",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Shiran",
  //     subject: "Sorry!",
  //     body: "sososo sorry for deleti sososo sorry for deleti sososo sorry for deleti sososo sorry for deleti sososo sorry for deleti sososo sorry for deletisososo sorry for deleti sososo sorry for deletisososo sorry for deletisososo sorry for deletisososo sorry for deleti... sososo sorry for deleti sososo sorry for deletisososo sorry for deletisososo sorry for deletisososo sorry for deletisososo sorry for deletisososo sorry for deletisososo sorry for deletisososo sorry for deletisososo sorry for deleti sososo sorry for deleti sososo sorry for deleti sososo sorry for deleti",
  //     to: "momo@momo.com",
  //     createdAt: "2022-05-7",
  //     isRead: false,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Guy",
  //     subject: "Last call",
  //     body: "Dear jhon, i waited to...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-2",
  //     isRead: true,
  //     state: 'sent',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "James",
  //     subject: "alibaba is going crazy",
  //     body: "fsd rtg sadsd rgfgfsdae lkgf...",
  //     to: "momo@momo.com",
  //     createdAt: "2021-02-23",
  //     isRead: true,
  //     state: 'draft',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Shiran",
  //     subject: "I need to denied your permission",
  //     body: "According the latest roles on...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-29",
  //     isRead: false,
  //     state: 'sent',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Dor",
  //     subject: "Come and vote!",
  //     body: "Its the final countdown!!come...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-2",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: true,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Alen",
  //     subject: "Lets start!",
  //     body: "hay there!!! what about to...",
  //     to: "momo@momo.com",
  //     createdAt: utilService.getFormattedNowDate(),
  //     isRead: false,
  //     state: 'sent',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Alon",
  //     subject: "Need help??",
  //     body: "shity day!!! i cant find t...",
  //     to: "momo@momo.com",
  //     createdAt: "2021-02-23",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Shiran",
  //     subject: "Sorry!",
  //     body: "sososo sorry for deleti...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-05-7",
  //     isRead: false,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Guy",
  //     subject: "Last call",
  //     body: "Dear jhon, i waited to...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-2",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "James",
  //     subject: "alibaba is going crazy",
  //     body: "fsd rtg sadsd rgfgfsdae lkgf...",
  //     to: "momo@momo.com",
  //     createdAt: "2021-02-23",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Shiran",
  //     subject: "I need to denied your permission",
  //     body: "According the latest roles on...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-29",
  //     isRead: false,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Dor",
  //     subject: "Come and vote!",
  //     body: "Its the final countdown!!come...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-2",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Alen",
  //     subject: "Lets start!",
  //     body: "hay there!!! what about to...",
  //     to: "momo@momo.com",
  //     createdAt: utilService.getFormattedNowDate(),
  //     isRead: false,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Alon",
  //     subject: "Need help??",
  //     body: "shity day!!! i cant find t...",
  //     to: "momo@momo.com",
  //     createdAt: "2021-02-23",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Shiran",
  //     subject: "Sorry!",
  //     body: "sososo sorry for deleti...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-05-7",
  //     isRead: false,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Guy",
  //     subject: "Last call",
  //     body: "Dear jhon, i waited to...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-2",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "James",
  //     subject: "alibaba is going crazy",
  //     body: "fsd rtg sadsd rgfgfsdae lkgf...",
  //     to: "momo@momo.com",
  //     createdAt: "2021-02-23",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Shiran",
  //     subject: "I need to denied your permission",
  //     body: "According the latest roles on...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-29",
  //     isRead: false,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  //   {
  //     id: utilService.makeId(),
  //     name: "Dor",
  //     subject: "Come and vote!",
  //     body: "Its the final countdown!!come...",
  //     to: "momo@momo.com",
  //     createdAt: "2022-06-2",
  //     isRead: true,
  //     state: 'inbox',
  //     to: null,
  //     cc: null,
  //     bbc: null,
  //     isStar: false,
  //   },
  // ]
//   const mails = genericMails
//   storageService.store(MAIL_KEY, mails)
//   return genericMails
// }

// const names = ['Alon','Dor','Yael','Sarit','Alen','Guy','Yuval',
//          'Denis','Kai','Alon','Dor','Yael','Sarit','Alen',
//          'Guy','Yuval','Denis','Kai']
