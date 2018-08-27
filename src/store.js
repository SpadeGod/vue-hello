import Vue from 'vue'
import Vuex from 'vuex'

import HomePageStore from './components/homePage/HomePageStore'
import LoginStore from './components/login/LoginStore'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        HomePageStore,
        LoginStore
    }
})
export default store
