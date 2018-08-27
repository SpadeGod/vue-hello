import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/homePage/HomePage'
import Login from '../components/login/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        }, {
            path: '/Login',
            name: 'Login',
            component: Login
        }
    ]
})
