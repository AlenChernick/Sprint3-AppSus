import homePage from './pages/app-home.cmp.js'
import mailApp from './apps/mail/pages/mail-index.cmp.js'
import keepApp from './apps/keep/pages/note-index.cmp.js'
import MailfullScreen from './apps/mail/pages/mail-full-screen.cmp.js'




const routes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutPage,
    //     children: [
    //         {
    //             path: 'team',
    //             component: aboutTeam
    //         },
    //         {
    //             path: 'service',
    //             component: aboutService
    //         },
    //     ]
    // },
    {
        path: '/mail',
        component: mailApp,
        },

    {
        path: '/fullScreenMail',
        component: MailfullScreen
    },
    {
        path: '/keep',
        component: keepApp
    },

]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})