<script setup>
import Item from './details.vue';
import axios from 'axios';
</script>
<script>
export default {
    data() {
      return {
        techs: [
            {
                name:'One Page',
                state: false
            },
            {
                name: 'Landing Page',
                state: false
            },
            {
                name: 'App',
                state: false
            },
            {
                name: 'Laravel',
                state: false
            },
            {
                name: 'HTML',
                state: false
            },
            {
                name: 'Bootstrap',
                state: false
            },
            {
                name: 'Angular',
                state: false
            },
            {
                name: 'Ionic',
                state: false
            },
        ],
        pages: null
      }
    },
    mounted() {
        axios.get("/src/assets/information/projects.json")
        .then((result) => {
            this.pages = result.data.data;
        })
    }
  }
</script>
<template>
    <div>
        <!-- <div class="row">
            <div class="col s12 white radius">
                <div class="input-field col s12">
                    <select multiple>
                        <option class="white-text" :value="tech.name" v-for="(tech, i) in techs" :key="i">{{tech.name}}</option>
                    </select>
                    <label>Filtro</label>
                </div>
            </div>
        </div> -->
        <div class="row">
            <Item v-for="(item, i) in pages" :key="i" :data="item" />
        </div>
    </div>
</template>
<style scoped>
.radius{
    border-radius: 5px;
}
</style>