import { reactive } from 'vue'

export const store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    name: null,
    series: null,
    status: null
})