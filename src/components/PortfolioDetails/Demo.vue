<script setup>
import GalleryModal from "../../components/GalleryModal/index.vue";
</script>
<script>
export default {
    data() {
        return {
            showImg: false,
        }
    },
    props: {
        image: String,
        demo: String,
        repo: String,
        gallery: Object
    },
    methods: {
        loaded() {
            this.showImg = !this.showImg
        }
    }
}
</script>

<template>
    <div>
        <div class="row hidden-phone">
            <div class="col s12">
                <img :src="image" v-show="showImg" style="width:100%" @load="loaded()">
            </div>
        </div>
        <div class="row">
            <div class="col s12 center">
                <div class="row btn-group">
                    <div v-if="demo" class="col s12 center" :class="( !repo && !gallery ) ? '' : ( !repo || !gallery || gallery.length <= 0 ) ? 'm6' : 'm4'">
                        <a :href="demo" target="_blank" class="btn btn-large green">DEMO</a>
                    </div>
                    <div v-if="repo" class="col s12 center" :class="( !demo && !gallery ) ? '' : ( !demo || !gallery || gallery.length <= 0 ) ? 'm6' : 'm4'">
                        <a :href="repo" target="_blank" class="btn btn-large purple">REPOSITORIO</a>
                    </div>
                    <div class="col s12 center"  v-if="(gallery && gallery.length > 0)" :class="(!demo && !repo) ? '' : (!demo || !repo) ? 'm6' : 'm4'">
                        <GalleryModal :gallery="gallery">
                            <button class="btn btn-large light-blue darken-4">GALERÍA</button>
                        </GalleryModal>
                    </div>
                </div>
            </div>
        </div>          
    </div>
</template>

<style scoped>
.btn {
    width: 100%;
}
@media only screen and (max-width: 768px) {
    .btn-group > div:first-of-type .btn {
        border-bottom-left-radius: 0px !important;
        border-bottom-right-radius: 0px !important;
    }
    .btn-group > div:last-of-type .btn {
        border-top-left-radius: 0px !important;
        border-top-right-radius: 0px !important;
    }
}
@media only screen and (max-width: 992px) {
    .hidden-phone {
     display: none;   
    }
    
}
</style>