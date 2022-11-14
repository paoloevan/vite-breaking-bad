<script>
import CharactersItem from './CharactersItem.vue'
export default {
    name: 'CharactersList',
    components: {
        CharactersItem
    }
}
</script>

<template>
    <h6>Found 63 characters</h6>

    <CharactersItem />

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
</style>