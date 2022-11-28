<script setup>
import Item from './details.vue';
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
        pages: [
            {
                title: "Barbería El Imperial",
                type: ['One Page'],
                thumb: new URL(`../../assets/img/projects/barberia-El-Imperial_thumb.png`, import.meta.url).href,
                info: 'Página web de tipo One Page, desarrollado para barbería "El imperial", dando a conocer servicios y ubicación.',
                demo: 'https://rojo95.github.io/barberia-el-imperial-static/',
                tech: [
                    {
                        name: 'WordPress',
                        desc: 'WordPress es un sistema de gestión de contenidos lanzado el 27 de mayo de 2003, enfocado a la creación de cualquier tipo de página web.',
                        docs: 'https://wordpress.com/es/'
                    },
                    {
                        name: 'Elementor',
                        desc: 'El plugin creador de sitios web de Elementor permite a los usuarios de WordPress crear y editar sitios web empleando la técnica de arrastrar y soltar, con un modo de respuesta integrado.',
                        docs: 'https://elementor.com'
                    },
                    {
                        name: 'LoftLoader',
                        desc: 'Plugin para realizar ventana básica de precarga de página web',
                        docs: 'https://es.wordpress.org/plugins/loftloader/'
                    }
                ]
            },
            {
                title: "Dyhana",
                type: ['Landing Page'],
                thumb: new URL(`../../assets/img/projects/dhyana_thumb.png`, import.meta.url).href,
                info: 'Página web de tipo Landing Page de academia de yoga "Dhyana" destinada a ofrecer servicios, captar subscriptores y muevos clientes.',
                demo: 'https://rojo95.github.io/dhyana/',
                tech: [
                    {
                        name: 'WordPress',
                        desc: 'WordPress es un sistema de gestión de contenidos lanzado el 27 de mayo de 2003, enfocado a la creación de cualquier tipo de página web.',
                        docs: 'https://wordpress.com/es/'
                    },
                    {
                        name: 'Elementor',
                        desc: 'El plugin creador de sitios web de Elementor permite a los usuarios de WordPress crear y editar sitios web empleando la técnica de arrastrar y soltar, con un modo de respuesta integrado.',
                        docs: 'https://elementor.com'
                    },
                    {
                        name: 'LoftLoader',
                        desc: 'Plugin para realizar ventana básica de precarga de página web',
                        docs: 'https://es.wordpress.org/plugins/loftloader/'
                    }
                ]
            },
            {
                title: "OVNISOLUTIONS",
                type: ['One Page', 'Landing Page'],
                color_title: 'black',
                thumb: new URL(`../../assets/img/projects/ovnisolution_thumb.png`, import.meta.url).href,
                info: 'Página web desarrollada para OVNISOLUTIONS para exponer sus servicios, y captar clientes dando a conocer proyectos y alcance.',
                demo: 'https://rojo95.github.io/ovnisolutions-web/',
                tech: [
                    {
                        name: "Algular",
                        desc: "Angular es un framework para aplicaciones web desarrollado en TypeScript.",
                        docs: "https://angular.io"
                    },
                ],
            },
            {
                title: "App Geolocalización",
                color_title: 'black',
                type: ['App'],
                thumb: new URL(`../../assets/img/projects/ionic_thumb.png`, import.meta.url).href,
                info: 'Aplicación telefónica desarrollada en Ionic con la capacidad de posicionar geográficamente al usuario, marcar ubicaciones y generar rutas para llegar al objetivo.',
                demo: 'https://rojo95.github.io/ionic-app/',
                tech: [
                    {
                        name: "Ionic"
                    },
                    {
                        name: 'Leaflet'
                    }
                ]
            }
        ]
      }
    },
    mounted() {
      M.AutoInit(); 
    },
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