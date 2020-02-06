<template>
    <div class="wrapper">
        <h1>Hi {{ name }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Example",
        data () {
            return {
                name : "Albert"
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>