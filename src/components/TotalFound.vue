<script>
import { store } from '../store'

export default {
    name: 'TotalFound',

    data() {
        return {
            store,
            actorsLength: 62
        }
    },
    computed: {
        totalFound() {

            return this.store.characters.length
        }
    }
}
</script>

<template>
    <h6>Found {{ totalFound }} characters</h6>

</template>