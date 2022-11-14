<script>
import CharactersList from './CharactersList.vue'
export default {
    name: 'AppMain',
    components: {
        CharactersList
    }
}
</script>

<template>
    <main>
        <CharactersList />
    </main>
</template>

<style lang="scss" scoped>
main {
    background-color: white;
    padding: 2rem;
}
</style>