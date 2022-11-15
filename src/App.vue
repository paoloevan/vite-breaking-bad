<script >
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppSearch from './components/AppSearch.vue'
import axios from 'axios'
import { store } from './store.js'

export default {
    name: 'App',
    components: {
        AppHeader,
        AppSearch,
        AppMain
    },
    data() {
        return {
            store
        }
    },
    methods: {
        callApi() {
            this.store.loading = true
            const categoryUrl = 'https://www.breakingbadapi.com/api/characters?category='
            const url = categoryUrl + this.store.searchText
            axios.get(url)
                .then(response => {
                    this.store.characters = response.data
                    this.store.loading = false
                })
        }
    },
    mounted() {
        this.callApi()
    }
}
</script>

<template>
    <div class="container">
        <AppHeader />
        <!-- / header -->
        <AppSearch @filterSeries="callApi" />
        <!-- / search -->
        <AppMain />
        <!-- / header -->
    </div>

</template>

<style lang="scss" scoped>

</style>
