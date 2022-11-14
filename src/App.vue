<script >
import AppHeader from './components/AppHeader.vue'
import AppNav from './components/AppNav.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios'
import { store } from './store.js'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppNav,
        AppMain
    },
    data() {
        return {
            store
        }
    },
    methods: {
        callApi(url) {
            axios.get(url)
                .then(response => {
                    console.log(response.data)
                    this.store.characters = response.data

                })
        }
    },
    mounted() {
        this.callApi(this.store.API_URL)
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
