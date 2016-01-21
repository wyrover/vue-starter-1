<script>
    import navbar from './navbar.vue'

    export default {
        name: "app",
        components: {
            navbar
        }
    }
</script>

<template>
    <navbar></navbar>
    <router-view></router-view>
</template>