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
      show : false,
      pdf: new URL(`../../assets/pdf/ES - Curriculum Vitae Johan 23-03-2023`, import.meta.url).href
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

    <!-- <button class="btn-floating halfway-fab waves-effect waves-light purple btn-large position-btn-more" >
        <i class="material-icons">add</i>
    </button> -->

    <!--<div class="fixed-action-btn">
      <a class="btn-floating btn-large purple" title="Más">
        <i class="large material-icons">add</i>
      </a>
      <ul>
        <li><a class="btn-floating green"><i class="material-icons">visibility</i></a></li>
        <li><a class="btn-floating blue" :href="pdf" target="_blank"><i class="material-icons">file_download</i></a></li>
      </ul>
    </div>-->
    
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

.position-btn-more {
  position: fixed !important;
  bottom: 30px !important;
  /* top: 0px; */
}
</style>