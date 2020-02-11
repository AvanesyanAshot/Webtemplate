<template>
    <div class="wrapper">
        <h1>Hi {{ message }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Example",
        data () {
            return {
                message: "Albert"
            }
        },
        created() {
            this.message = this.$store.getters.getMessage
        }
    }
</script>

<style lang="scss" scoped>

</style>