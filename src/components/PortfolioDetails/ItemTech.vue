<script>
export default {
    props: {
      data: Object,
    },
    data() {
        return {
            image: new URL(`/src/assets/img/knowledge/${this.data.image}`, import.meta.url),
            showImg: false,
        }
    },
    methods: {
        loaded() {
            this.showImg = !this.showImg
        }
    }
}
</script>

<template>
    <li class="collection-item avatar black-text">
        <i class="material-icons circle green" v-if="!showImg">computer</i>
        <img :src="image" :alt="data.name" class="logo" v-if="image" @load="loaded()" v-show="showImg">
        <span class="title paragraph">{{data.name}}</span>
        <p>{{data.desc}}</p>
        <a href="#!" class="secondary-content" style="top: 10px;"><i class="material-icons">settings_ethernet</i></a>
    </li>
</template>

<style scoped>
.logo {
    position: absolute;
    width: 42px;
    height: 42px;
    overflow: hidden;
    left: 15px;
    display: inline-block;
    vertical-align: middle;
}
</style>