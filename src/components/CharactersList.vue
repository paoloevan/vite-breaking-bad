<script>
import CharactersItem from './CharactersItem.vue'
import { store } from '../../src/store.js'
import AppLoading from './AppLoading.vue'
import { onMounted } from 'vue'
import TotalFound from './TotalFound.vue'

export default {
    name: 'CharactersList',
    components: {
        CharactersItem,
        AppLoading,
        TotalFound
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <TotalFound />

    <div class="container">
        <div class="row row-cols-5" v-if="!store.loading">
            <CharactersItem :character="character" v-for="character in store.characters" />
        </div>
        <AppLoading v-else />
    </div>

</template>

<style lang="scss" scoped>
h6 {
    color: white;
    font-size: 1rem;
    font-weight: 600;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: rgb(30, 30, 30);
}

.col {
    margin-bottom: 0.5rem;

    h3 {
        text-align: center;
    }
}
</style>