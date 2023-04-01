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
    }
  },
  mounted() {
    this.show = !this.show;
  },
  methods: {
    download () {
      const file = "ES-Curriculum_Vitae_Johan_23-03-2023.pdf"
      const pdf = new URL(`./assets/pdf/${file}`, import.meta.url).href
      fetch(`${pdf}`)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', file);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(error => console.error(error));
    }
  },
}
</script>

<template>
  <div>
    
    <NavBar />

    <!-- <button class="btn-floating halfway-fab waves-effect waves-light purple btn-large position-btn-more" >
        <i class="material-icons">add</i>
    </button> -->

    <div class="fixed-action-btn" @click="download()">
      <a class="btn-floating btn-large purple" title="Más">
        <i class="large material-icons">file_download</i>
        <!--i class="large material-icons">add</i-->
      </a>
      <!--ul>
        <li><a class="btn-floating green"><i class="material-icons">visibility</i></a></li>
        <li><a class="btn-floating blue" @click="download()"><i class="material-icons">file_download</i></a></li>
      </ul-->
    </div>
    
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