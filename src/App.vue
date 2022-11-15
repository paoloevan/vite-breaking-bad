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
            store,
            series: ''
        }
    },
    methods: {
        callApi(url) {
            axios.get(url)
                .then(response => {
                    //console.log(response.data)
                    this.store.characters = response.data
                    this.store.loading = false
                })
        },
        searchSeries() {
            console.log(this.series);
            const categoryUrl = 'https://www.breakingbadapi.com/api/characters?category='
            //this.store.API_URL = categoryUrl + this.series
            console.log(categoryUrl + this.series)
            axios.get(categoryUrl + this.series)
                .then(response => {
                    console.log(response.data);
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
        <AppNav />
        <select v-model="series" name="series">
            <option value="">Selezionare una serie</option>
            <option value="Breaking+Bad">Breaking Bad</option>
            <option value="Better+Call+Saul">Better Call Saul</option>
        </select>
        <button @click="searchSeries()" type="submit">Cerca</button>
        <AppMain />

    </div>

</template>

<style lang="scss" scoped>
select,
option,
button {
    margin: 2rem 0.25rem;
    padding: 0.5rem;
    border: none;
    border-radius: 10px;


}
</style>
