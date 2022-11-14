<script>
export default {
    name: 'CharactersItem'
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-5">
            <div class="col">
                <div class="my_card">
                    <img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
                        alt="">
                    <div class="name">Lorem, ipsum.</div>
                    <div class="series">Lorem, dolor.</div>
                    <div class="state">Presumed dead</div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.col {
    margin-bottom: 0.5rem;

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
        .state {
            color: gray;
            margin-top: 0.25rem;
        }
    }
}
</style>