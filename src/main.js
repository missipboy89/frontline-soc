/* eslint-disable eol-last */
import Vue from 'vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'
import VideoBackground from 'vue-responsive-video-background-player'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('video-background', VideoBackground)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')