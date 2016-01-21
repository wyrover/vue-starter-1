import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'

import app from './components/app.vue'
import { configRouter } from './routes'

Vue.use(Router)
Vue.use(Resource)

var router = new Router()
configRouter(router)

router.beforeEach(function () {
    window.scrollTo(0, 0)
})

router.redirect({
    '*': '/home'
})

router.start(app, '#app')