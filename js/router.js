import homePage from './pages/app-home.cmp.js'
import mailApp from './pages/app-mail.cmp.js'
import keepApp from './pages/app-keep.cmp.js'
import aboutPage from './pages/app-about.cmp.js'



const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage,
        children: [
            {
                path: 'team',
                component: aboutTeam
            },
            {
                path: 'service',
                component: aboutService
            },
        ]
    },
    {
        path: '/mail',
        component: mailApp
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