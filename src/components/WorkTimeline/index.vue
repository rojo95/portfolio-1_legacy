<script setup>
import ItemTimeline from "./ItemTimeline.vue";
import axios from "redaxios";
</script>

<script>
export default {
  data() {
    return {
      works: null,
    };
  },
  mounted() {
    this.getWorks();
  },
  methods: {
    async getWorks() {
      return await axios
        .get(
          new URL("../../assets/information/works.json", import.meta.url).href
        )
        .then((result) => {
          this.works = result.data.data;
        });
    },
  },
};
</script>

<template>
  <div class="content">
    <ItemTimeline v-for="item in works" v-bind:key="item">
      <template #icon>
        <i class="material-icons icon">business</i>
      </template>
      <template #heading>
        <div class="text-title">
          <strong>
            {{ item.cargo }}
          </strong>
          &nbsp;- {{ item.abrName }} <br />
          ({{ item.inicio }} - {{ item.fin || "Actualidad" }})
        </div>
      </template>

      <div>
        <div v-if="item.abrName != item.name">
          <b>
            <h6>{{ item.name }}</h6>
          </b>
          <br />
        </div>
        <div v-if="item.proyects">
          <b>Proyectos:</b>
          <br />
          <p>
            <ul>
              <li v-for="(proy, i) in item.proyects" :key="i">
                <b>
                  Proyecto: {{ proy.name }}
                </b>
                <p>Rol: {{ proy.rol }}</p>
                <p>
                  {{ proy.desc }}
                </p>
                <p>
                  {{ proy.tech }}
                </p>
                <p>
                  {{ proy.goals }}
                </p>
              </li>
            </ul>
          </p>
        </div>
        <br v-if="item.proyects" />
        <b>Tareas Desempeñadas:</b>
        <ul>
          <li v-for="list in item.funciones" v-bind:key="list">- {{ list }}</li>
        </ul>

        <br />
        <div class="row">
          <div class="col m6" v-if="item.conocimientos?.length > 0">
            <b>Conocimientos Empleados:</b>
            <ul>
              <li v-for="list in item.conocimientos" v-bind:key="list">
                - {{ list }}
              </li>
            </ul>
          </div>
          <div class="col m6" v-if="item.frameworks?.length > 0">
            <b>Frameworks Empleados:</b>
            <ul>
              <li v-for="list in item.frameworks" v-bind:key="list">
                - {{ list }}
              </li>
            </ul>
          </div>
          <div class="col m6" v-if="item.cms?.length > 0">
            <b>CMS Empleados:</b>
            <ul>
              <li v-for="list in item.cms" v-bind:key="list">- {{ list }}</li>
            </ul>
          </div>
        </div>
      </div>
      <hr v-if="item.descripcion" />
      {{ item.descripcion || "" }}
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
