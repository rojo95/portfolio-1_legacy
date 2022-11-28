<script>
export default {
    props: {
        data: Array,
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        loaded() {
            this.show = true;
        }
    }
}
</script>
<template>
    <div class="col s12 m4">
        <div class="card">
            <div class="card-image center-align s12">
                <div class="loader" v-show="!show">
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue-only">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div>
                            <div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <img :src="data.thumb" class="materialboxed" :data-caption="data.info" @load="loaded()" v-show="show">
                <span class="card-title" :class="!show ? 'black' : data.color_title ? data.color_title : 'white black-text'">{{data.title}}</span>
                <a class="btn-floating halfway-fab waves-effect waves-light purple btn-large" :href="data.demo" target="_blakn">
                    <!-- <RouterLink class="grey-text text-lighten-3 waves-effect waves-light" to="/project-details"> -->
                        <i class="material-icons">add</i>
                    <!-- </RouterLink> -->
                </a>
            </div>
            <div class="card-content black-text">
                <p>{{data.info}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.loader {
    min-height: 300px; top: 100px;
}
span.card-title {
    border-top-right-radius: 10px;
}
</style>