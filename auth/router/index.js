import VueRouter from 'vue-router';
import MainPage from '../src/pages/MainPage'
import LoginPage from '../src/pages/LoginPage'
import CreateCardPage from '../src/pages/CreateCardPage'
import EditCardPage from '../src/pages/EditCardPage'

export default  new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainPage
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage
        },
        {
            path: '/create',
            name: 'create-card',
            component: CreateCardPage
        },
        {
            path: '/:id',
            name: 'edit-card',
            component: EditCardPage
        },
    ]
})
