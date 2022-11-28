<script setup>
import PortfolioItems from '../../components/portfolioItem/index.vue';
</script>
<!-- <script>
export default {
    mounted() {
        // M.AutoInit(); 
    },
    data() {
        return {
            pages: [
                {
                    title: "Barbería El Imperial",
                    type: ['One Page'],
                    thumb: new URL(`../../assets/img/projects/barberia-El-Imperial_thumb.png`, import.meta.url).href,
                    info: 'Página web de tipo One Page, desarrollado para barbería "El imperial", dando a conocer servicios y ubicación.',
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
                    info: 'Página web de tipo Landing Page de academia de yoga "Dhyana" destinada a ofrecer servicios ',
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
                    color_title: 'black white-text',
                    thumb: new URL(`../../assets/img/projects/ovnisolution_thumb.png`, import.meta.url).href,
                    info: '',
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
                    info: '',
                    tech: [
                        {
                            name: "Ionic"
                        }
                    ]
                }
            ]
        }
    }
}
</script> -->

<template>
    <div class="section bg-dark white-text">
        <div class="row">
            <div class="col m10 s10 offset-s1 offset-m1">
                <div class="row">
                    <div class="col">
                        <h2>Portafolio</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <!-- <img class="materialboxed" width="650" src="../../assets/img/skybox_nx.jpg" data-caption="A picture of a way with a group of trees in a park">         -->
                        <PortfolioItems/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>