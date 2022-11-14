<script>
export default {
    name: 'CharactersItem',
    props: {
        character: Object
    }
}
</script>

<template>

    <div class="col">
        <div class="my_card">
            <img :src="character.img" alt="">
            <div class="name">{{ character.name }}</div>
            <div class="series">{{ character.category }}</div>
            <div class="status">{{ character.status }}</div>
        </div>
    </div>


</template>

<style lang="scss" scoped>
.my_card {
    padding: 1rem;
    background-color: rgb(0, 42, 52);
    text-align: center;

    .name {
        color: white;
        text-transform: uppercase;
        font-weight: 600;
    }

    .series,
    .status {
        color: gray;
        margin-top: 0.25rem;
    }
}
</style>