<script>
import { store } from '../store.js'
export default {
    name: 'AppSearch',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <select @change="$emit('filterSeries')" v-model="store.searchText" name="series">
        <option value="">Selezionare una serie</option>
        <option value="Breaking+Bad">Breaking Bad</option>
        <option value="Better+Call+Saul">Better Call Saul</option>
    </select>

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