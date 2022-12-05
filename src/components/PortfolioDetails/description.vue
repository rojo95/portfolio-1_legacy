<script>
export default {
    data() {
        return {
            showImg: false,
        }
    },
    props: {
      info: String,
      image: String,
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
        <div class="row">
            <div class="col s12">
                <p class="text-justify paragraph">
                    {{info}}
                </p>
            </div>
        </div>

        <div class="row show-phone">
            <div class="col s12">
                <img :src="image" v-show="showImg" style="width:100%" @load="loaded()">
            </div>
        </div>
    </div>
</template>

<style scoped>
.show-phone {
    display: none;
}
@media only screen and (max-width: 992px) {
    .show-phone {
        display: block;
    }
}
</style>