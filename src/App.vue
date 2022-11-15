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
        callApi(url) {
            axios.get(url)
                .then(response => {
                    this.store.characters = response.data
                    this.store.loading = false
                })
        },
        searchSeries() {
            const categoryUrl = 'https://www.breakingbadapi.com/api/characters?category='
            this.store.API_URL = categoryUrl + this.store.searchText
            axios.get(categoryUrl + this.store.searchText)
                .then(response => {
                    this.store.characters = response.data
                    this.store.loading = false
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
        <!-- / header -->
        <AppSearch @filterSeries="searchSeries" />
        <!-- / search -->
        <AppMain />
        <!-- / header -->
    </div>

</template>

<style lang="scss" scoped>

</style>
