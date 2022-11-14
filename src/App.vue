<script >
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppNav,
        AppMain
    }
}
</script>

<template>
    <div class="container">
        <AppHeader />
        <AppNav />
        <AppMain />

    </div>

</template>

<style scoped>

</style>
