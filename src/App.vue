<script setup>
import { RouterLink, RouterView } from "vue-router";
import Footer from "./components/footer/index.vue";
import NavBar from "./components/navBar/index.vue";
M.AutoInit();
</script>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = !this.show;
  },
  methods: {
    download() {
      const file = "Curriculum_Johan_Roman-ES.pdf";
      const pdf = new URL(`./assets/pdf/${file}`, import.meta.url).href;
      fetch(`${pdf}`)
        .then((response) => response.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", file);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((error) => console.error(error));
    },
  },
};
</script>

<template>
  <div class="body">
    <div class="row p-none">
      <div class="col s12 p-none">
        <NavBar />
      </div>
      <div class="row">
        <div class="col s12 body">
          <RouterView v-show="show" />
          <div>
            <div class="row" v-show="!show">
              <div class="col valign-wrapper s12 content">
                <div class="center s12 col">
                  <div class="preloader-wrapper active">
                    <div class="spinner-layer spinner-green-only">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-none">
        <div class="col s12 p-none">
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.p-none {
  padding: 0px !important;
  margin: 0px !important;
}
.body {
  padding: 0px;
  width: 100%;
  min-height: 100vh !important;
}
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
