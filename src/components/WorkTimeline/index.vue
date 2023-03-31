
<script setup>
  import ItemTimeline from './ItemTimeline.vue';
  import axios from 'redaxios';
</script>

<script>
  export default {
    data() {
      return {
        works: null
      }
    },
    mounted() {
        this.getWorks();
    },
    methods: {
      async getWorks() {
            return await axios.get(new URL("../../assets/information/works.json", import.meta.url).href)
            .then((result) => {
                this.works = result.data.data;
            })
        }
    }
  };
</script>

<template>
  <div class="content">

    <ItemTimeline v-for="item in works" v-bind:key="item">
      <template #icon>
        <i class="material-icons icon">business</i>
      </template>
      <template #heading>
        <k>
          {{item.cargo}}
        </k>
        &nbsp;- {{item.abrName}} <br> ({{item.inicio}} - {{item.fin}})
      </template>
  
      <div>
        <b v-if="item.abrName!=item.name">{{item.name}}</b>
        <br v-if="item.abrName!=item.name">
        <br v-if="item.abrName!=item.name">
        <b>Tareas Desempeñadas:</b>
        <ul>
          <li v-for="list in item.funciones" v-bind:key="list">- {{list}}</li>
        </ul>
  
        <br>
        <div class="row">
          <div class="col m6" v-if="item.conocimientos.length>0">
            <b>Conocimientos Empleados:</b>
            <ul>
              <li v-for="list in item.conocimientos" v-bind:key="list">- {{list}}</li>
            </ul>
          </div>
          <div class="col m6" v-if="item.frameworks.length>0">
            <b>Frameworks Empleados:</b>
            <ul>
              <li v-for="list in item.frameworks" v-bind:key="list">- {{list}}</li>
            </ul>
          </div>
        </div>
      </div>
      {{item.descripcion}}
    </ItemTimeline>
  </div>
</template>

<style scoped>
  li {
    margin-left: 15px;
  }


  @media only screen and (max-width: 1024px) {
    .icon {
      color: #fff !important;
    }
  }
</style>