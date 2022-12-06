<script>
export default {
    props: {
        src: String,
        desc: String
    },
    data() {
        return {
            image: new URL(this.src, import.meta.url)
        }
    },
    mounted() {
        M.AutoInit();
    }
}
</script>
<template>
    <div>
        <img class="materialboxed" :src="src" height="150" :data-caption="desc">
    </div>
</template>

<style scoped>
</style>