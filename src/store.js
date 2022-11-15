import { reactive } from 'vue'

export const store = reactive({
    API_URL: 'https://www.breakingbadapi.com/api/characters',
    characters: [],
    loading: true,
    searchText: ''
})