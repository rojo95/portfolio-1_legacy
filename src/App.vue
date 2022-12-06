<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import Footer from './components/footer/index.vue'
  import NavBar from './components/navBar/index.vue'
  M.AutoInit();
</script>
<script>
export default {
  data() {
    return {
      show : false
    }
  },
  mounted() {
    this.show = !this.show;
  }
}
</script>

<template>
  <div>
    
    <NavBar />

    <div>
      <div class="row" v-show="!show">
        <div class="col valign-wrapper s12 content">
          <div class="center s12 col">
            <div class="preloader-wrapper active">
              <div class="spinner-layer spinner-green-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <RouterView v-show="show"/>
    
    <Footer />
      
  </div>
</template>

<style scoped>
.preloader-wrapper {
  width: 180px !important;
  height: 180px !important;
}

.content {
  height: 600px;
}
</style>