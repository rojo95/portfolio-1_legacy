<script setup>
import Conocimientos from "../../components/KnowledgeItems/index.vue";
import Layout from "../../layouts/index.vue";
</script>
<script>
export default {
    data() {
        return {
            show: false,
            langs: [
                {
                    img: new URL(`../../assets/img/knowledge/php.png`, import.meta.url).href,
                    name: 'PHP',
                    link: "https://www.php.net/manual/es/intro-whatis.php"
                },
                {
                    img: new URL(`../../assets/img/knowledge/javascript.png`, import.meta.url).href,
                    name: 'JavaScript',
                    link: "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
                },
                {
                    img: new URL(`../../assets/img/knowledge/typescript.png`, import.meta.url).href,
                    name: 'TypeScript',
                    link: "https://es.wikipedia.org/wiki/TypeScript"
                }
            ],
            langWebD: [
                {
                    img: new URL(`../../assets/img/knowledge/css3.png`, import.meta.url).href,
                    name: 'CSS 3',
                    link: 'https://es.wikipedia.org/wiki/CSS'
                },
                {
                    img: new URL(`../../assets/img/knowledge/html5.png`, import.meta.url).href,
                    name: 'HTML 5',
                    link: 'https://es.wikipedia.org/wiki/HTML'
                },
            ],
            frameworks: [
                {
                    img: new URL(`../../assets/img/knowledge/laravel.png`, import.meta.url).href,
                    name: 'Laravel',
                    link: '',
                },
                {
                    img: new URL(`../../assets/img/knowledge/angular.png`, import.meta.url).href,
                    name: 'Angular',
                    link: '',
                },
                {
                    img: new URL(`../../assets/img/knowledge/vue.png`, import.meta.url).href,
                    name: 'Vue JS',
                    link: '',
                },
                {
                    img: new URL(`../../assets/img/knowledge/react.png`, import.meta.url).href,
                    name: 'React JS / React Native',
                    link: '',
                },
                {
                    img: new URL(`../../assets/img/knowledge/ionic.png`, import.meta.url).href,
                    name: 'Ionic',
                    link: '',
                },
                {
                    img: new URL(`../../assets/img/knowledge/expressjs.png`, import.meta.url).href,
                    name: 'Express.JS',
                    link: '',
                },
                {
                    img: new URL(`../../assets/img/knowledge/bootstrap.png`, import.meta.url).href,
                    name: 'Bootstrap',
                    link: '',
                },
            ],
            entornoEjecucion: [
                {
                    img: new URL(`../../assets/img/knowledge/node.png`, import.meta.url).href,
                    name: 'Node JS',
                    link: ''
                }
            ],
            sO: [
                {
                    img: new URL(`../../assets/img/knowledge/windows.png`, import.meta.url).href,
                    name: 'Windows',
                    link: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/ubuntu.png`, import.meta.url).href,
                    name: 'Ubuntu',
                    link: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/linux_mint.png`, import.meta.url).href,
                    name: 'Linux Mint',
                    link: ''
                },
            ],
            servidores: [
                {
                    img: new URL(`../../assets/img/knowledge/apache.png`, import.meta.url).href,
                    name: 'Apache HTTP Server',
                    link: ''
                }
            ],
            libGeo: [
                {
                    img: new URL(`../../assets/img/knowledge/leaflet.png`, import.meta.url).href,
                    name: 'Leaflet',
                    lang: 'JavaScript',
                    link: 'https://leafletjs.com',
                    desc: 'Leaflet es la principal biblioteca JavaScript de código abierto para mapas interactivos compatibles con dispositivos móviles. Con un peso aproximado de 42 KB de JS, tiene todas las características de mapeo que la mayoría de los desarrolladores necesitan. Leaflet está diseñado teniendo en cuenta la simplicidad, el rendimiento y la facilidad de uso. Funciona de manera eficiente en todas las principales plataformas móviles y de escritorio, se puede ampliar con muchos complementos, tiene una API hermosa, fácil de usar y bien documentada y un código fuente simple y legible al que es un placer contribuir.'
                }
            ]
        }
    },
    mounted() {
        M.AutoInit(); 
        console.log(this.images)
    },
    methods: {
        loading(){
            this.show = true
            // this.show = !this.show
        }
    },
}
</script>

<template>
    <Layout>
        <template #title>
            Acerca de Mí
        </template>
        <template #content>
            <div class="row">
                
                <div class="col l6 s12">
                    <div class="row">
                        <div class="col s12">
                            <p class="flow-text text-justify paragraph">
                                Ingeniero en Informática, con más de 5 años de experiencia en el área, especializado en el desarrollo de sistemas informáticos.
                                <br>
                                Soy una persona responsable, organizado, proactivo, comunicativo, creativo, investigativo, con disposición a aprender nuevos conocimientos, experiencia laboral y asumir retos de cualquier tipo.
                                <br>&nbsp;
                            </p>
                        </div>
                        
                        <div class="col s12 small-show">
                            <div class="center">
                                <img class="profile responsive-img border-green" v-bind:class="{'rotation' : show , 'hidden': !show}" src="../../assets/img/foto.jpeg"  @load="loading()">
                            </div>
                        </div>

                        <div class="col s12">
                            <h5>Educación:</h5>
                            <p class="flow-text text-justify paragraph">
                                <b>
                                    Instituto Universitario de Tecnología del Oeste “Mariscal Sucre” (IUTOMS)
                                </b> 
                                <br>
                                <b>
                                    Título Obtenido:&nbsp;
                                </b>
                                    Ing. en Informática, 2018
                                <br>
                                Caracas, Distrito Capital, Venezuela.
                            </p>
                        </div>
                    </div>

                    

                </div>
            
                <div class="col m6 s12 big-show">
                    <div class="center">
                        <img class="profile responsive-img border-green" v-bind:class="{'rotation' : show , 'hidden': !show}" src="../../assets/img/foto.jpeg"  @load="loading()">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col s12">
                </div>
            </div>

            <div class="row">
                <div class="col m6 s12">
                    <h5>Idiomas:</h5>  
                    <p class="flow-text paragraph">
                        <ul>
                            <li>Español - Nativo</li>
                            <li>
                                Ingles - A2
                            </li>
                            <li>
                                Portugués - A1
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <h5>Conocimientos</h5>
                </div>
            </div>
            
            <div class="row">
                <div class="col m6 s12">
                    <Conocimientos title="Lenguajes de Programación" :data="langs"/>
                </div>
                <div class="col m6 s12">
                    <Conocimientos title="Herramientas de Diseño Web" :data="langWebD" width='120px'/>
                </div>
            </div>

            <div class="row">
                <div class="col m6 s12">
                    <Conocimientos title="Frameworks" :data="frameworks"/>
                </div>
                <div class="col m6 s12">
                    <Conocimientos title="Entornos de Ejecucion" :data="entornoEjecucion"/>
                </div>
            </div>

            <div class="row">
                <div class="col m6 s12">
                    <Conocimientos title="Sistemas Operativos" :data="sO"/>
                </div>
                <div class="col m6 s12">
                    <Conocimientos title="Servidores" :data="servidores"/>
                </div>
            </div>
            
            <div class="row">
                <div class="col m6 s12">
                    <Conocimientos title="Librerías" subtitle="Geolocalización" :data="libGeo"/>
                </div>
                <div class="col m6 s12">
                </div>
            </div>
        </template>
    </Layout>
</template>


<!-- <style src="./aboutMe.css"></style> -->
<style scoped>
.small-show {
    display: none;
}
.paragraph {
    font-size: 20px;
}

.text-justify {
    text-align: justify;
}

.profile {
    width:300px;
    height:300px;
    border-radius: 50%;
    border:10px solid var(--color-custom-green);
    transition: .5s;
}

.profile:hover {
    transition: .5s;
    box-shadow: 0 0 20px var(--color-custom-purple);
}

.rotation {
    animation-duration: 1s;
    animation-name: rotation;
    animation-direction:normal;
}

.hidden {
    transition: 1s;
    opacity: 0;
}

@keyframes rotation {
    0% {
        transform: rotate3d(0, 1, 0, 180deg);
    }
}


@media only screen and (max-width: 992px) {
    .small-show {
      display: block !important;
    }
    .big-show {
      display: none !important;

    }
    .profile{
        width: 270px;
        height: 270px;
    }
  /* // md */
}
@media only screen and (min-width: 992px) and (max-width:1200px) {
  /* // lg */
}
@media only screen and (min-width: 1200px) and (max-width:1400px) {
  /* // xl */
}
@media only screen and (min-width: 1400px) {
  /* // xxl */
}

</style>