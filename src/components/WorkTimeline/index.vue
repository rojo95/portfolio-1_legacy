
<script setup>
  import ItemTimeline from './ItemTimeline.vue';
</script>

<script>
  export default {
    data() {
      return {
        works: [
          {
            name: 'Servicio Desconcentrado Nacional de Normalización Calidad Metrología y Reglamentaciones Técnicas',
            abrName: 'SENCAMER',
            inicio: '19 Nov 2019',
            fin: '01 Jul 2022',
            cargo: 'Jefe de División Encargado de Desarrollo de Sistemas',
            funciones: [
              'Jefe de División', 'Liderazgo de equipo multidisciplinario','Programador Web Full Stack', 'Diseño y modelado de bases de datos', 'Gestión de proyectos'
            ],
            conocimientos: ['HTML','CSS','PHP 5', 'PHP 7', 'PHP 8', 'Yaml'],
            frameworks: [
              'Laravel 7',
              'Laravel 8',
              'Laravel 9',
              'Bootstrap 3',
              'Bootstrap 4',
              'Bootstrap 5',
            ],
            descripcion: ''
          },
          {
            name: 'Fondo de Desarrollo para la Normalización, Calidad, Certificación y Metrología',
            abrName: 'FODENORCA',
            inicio: '19 Nov 2019',
            fin: '03 Ago 2021',
            cargo: 'Sub Gerente Encargado de Desarrollo de Sistemas',
            funciones: [
              'Jefe de División',
              'Liderazgo de equipo multidisciplinario',
              'Programador Web Full Stack',
              'Diseño y modelado de bases de datos',
              'Gestión de proyectos'
            ],
            conocimientos: ['HTML','CSS','PHP 5', 'PHP 7', 'PHP 8', 'Yaml'],
            frameworks: [
              'Laravel 7',
              'Laravel 8',
              'Laravel 9',
              'Bootstrap 3',
              'Bootstrap 4',
              'Bootstrap 5',
            ]
          },
          {
            name: 'INTACTILE',
            abrName: 'INTACTILE',
            inicio: '01 Dic 2018',
            fin: '02 Jul 2019',
            cargo: 'Desarrollador Web Full Stack',
            funciones: [
              'Programador Web Full Stack'
            ],
            conocimientos: [
              'HTML', 'CSS', 'JavaScript', 'NodeJs', 'EcmaScript 6', 'ExpressJS'
            ],
            frameworks: [
              'React Js', 'React Native Js'
            ],
            descripcion: ''
          },
          {
            name: 'NINWEB',
            abrName: 'NINWEB',
            inicio: '02 Jul 2018',
            fin: '30 Nov 2018',
            cargo: 'Desarrollador Web Full Stack',
            funciones: [
              'Programador Web Full Stack'
            ],
            conocimientos: [
              'HTML', 'CSS', 'JavaScript', 'JQuery','PHP'
            ],
            frameworks: [
              'Laravel'
            ],
            descripcion: ''
          },
          {
            name: 'Comisión Nacional de las Tecnologías de la Información',
            abrName: 'CONATI',
            inicio: '02 Jul 2018',
            fin: '30 Nov 2018',
            cargo: 'Analista Integral Senior de Sistemas Informáticos',
            funciones: [
              'Programador Web Full Stack',
              'Administración básica de servidores',
              'Diseño de bases de datos',
              'Soporte técnico'
            ],
            conocimientos: [
              'HTML', 'CSS', 'PHP', 'JavaScript', 'JQuery'
            ],
            frameworks: [
              'Bootstrap'
            ]
          }
        ]
      }
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
        <k>
          {{item.cargo}}
        </k>
        &nbsp;- {{item.abrName}} <br> ({{item.inicio}} - {{item.fin}})
      </template>
  
      <p>
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
      </p>
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