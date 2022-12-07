<script>
export default {
    props: {
        src: String,
        desc: String
    },
    data() {
        return {
            image: new URL(`/src/assets/img/projects/${this.src}`, import.meta.url)
        }
    },
    mounted() {
        M.AutoInit();
    }
}
</script>
<template>
    <div>
        <img class="materialboxed thumb_gallery" :src="image" :data-caption="desc  ? desc : ''">
    </div>
</template>

<style>
img.thumb_gallery:not(.active) {
    max-width: 150px;
    max-height: 250px;
}
div.materialbox-caption {
    z-index: 10000 !important;
}
</style>