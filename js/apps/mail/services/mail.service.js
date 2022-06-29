import { utilService } from "../../../services/util.service.js"
import { storageService } from "../../../services/storage.service.js"

const MAIL_KEY = "mail_db"
const mails = storageService.load(MAIL_KEY) || _createMails()

export const mailService = {
  getMails,
}

function getMails() {
  return Promise.resolve(mails)
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
  ]
  const mails = genericMails
  storageService.store(MAIL_KEY, mails)
  return genericMails
}
