export function configRouter (router) {
    router.map({
        '/home': {
            name: 'home',
            component: require('./components/home.vue')
        }
    })
}