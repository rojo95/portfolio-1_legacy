<script setup>
import ImageItemVue from './ImageItem.vue';
</script>
<script>
export default {
    props: {
        gallery: Object
    },
    mounted() {
        M.AutoInit();
    }
}
</script>

<template>
    <div>
        <a class="modal-trigger" href="#modal1">
            <slot>
            </slot>
        </a>

        <!-- Modal Structure -->
        <div id="modal1" class="modal black-text">
            <div class="modal-content">
            <h4>Galería del Proyecto</h4>
            <div class="row">
                <div class="col" v-for="(item, i) in gallery" :key="i">
                    <ImageItemVue :src="item.img" :desc="item.desc"/>                    
                </div>
            </div>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
            </div>
        </div>
          
    </div>
</template>

<style scoped>
    div.col {
        padding: 10px;
    }
</style>