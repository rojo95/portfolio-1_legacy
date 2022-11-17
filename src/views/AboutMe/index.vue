<style src="./aboutMe.css"></style>
<template>
    <div class="section bg-dark white-text">

        <div class="row">

            <div class="col m10 s10 offset-s1 offset-m1">
    
                <div class="row">
                    <div class="col">
                        <h2>Acerca de Mí</h2>
                    </div>
                </div>
    
                <div class="row">
                
                    <div class="col m6 s12">
                        <p class="flow-text text-justify">
                            Ingeniero en Informática, con más de 5 años de experiencia en el área, especializado en el desarrollo de sistemas informáticos.
                            <br>
                            Soy una persona responsable, organizado, proactivo, comunicativo, creativo, investigativo, con disposición a aprender nuevos conocimientos, experiencia laboral y asumir retos de cualquier tipo.
                            <br>&nbsp;
                        </p>
                    </div>
                
                    <div class="col m6 s12">
                        <div class="center">
                            <img class="profile responsive-img border-green" v-bind:class="{'rotation' : show , 'hidden': !show}" src="../../assets/img/foto.jpeg"  @load="loading()">
                        </div>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col s12">
                        <p class="flow-text">
                            <b>Educación:
                                <br>
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
    
                <div class="row">
                    <div class="col m6 s12">
                        <p class="flow-text">
                            <b>Idiomas:</b>  
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
    
                        <div class="row">
                            <div class="col">
                                <h4>Conocimientos</h4>
                            </div>
                        </div>
                        
                    </div>

                    <!-- <Conocimientos title="Frameworks" :data="langs" v-model="langs"/> -->
    
                    <div>
                        <div class="carousel center">
                            <div class="carousel-fixed-item center">
                                <h3 >
                                    Lenguajes de Programación
                                </h3 >
                                <!-- <p>Subtitle</p> -->
                            </div>
                            <div v-for="(item, index) in langs" :key="index" class="carousel-item  white-text" href="#one!">
                                <h4>{{item.name}}</h4>
                                <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" alt="" style="width:150px;">
                                <p class="white-text">{{item.desc}}</p>
                                <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="carousel center">
                            <div class="carousel-fixed-item center">
                                <h3 >
                                    Herramientas de Diseño Web
                                </h3 >
                                <!-- <p>Subtitle</p> -->
                            </div>
                            <div v-for="(item, index) in langWebD" :key="index" class="carousel-item  white-text" href="#one!">
                                <h4>{{item.name}}</h4>
                                <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" alt="" style="height:150px; width: 130px;">
                                <p class="white-text">{{item.desc}}</p>
                                <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="carousel center">
                            <div class="carousel-fixed-item center">
                                <h3 >
                                    Frameworks
                                </h3 >
                                <!-- <p>Subtitle</p> -->
                            </div>
                            <div v-for="(item, index) in frameworks" :key="index" class="carousel-item white-text">
                                <h4>{{item.name}}</h4>
                                <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" alt="" style="width:150px;">
                                <p class="white-text">{{item.desc}}</p>
                                <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="carousel center">
                            <div class="carousel-fixed-item center">
                                <h3 >
                                    Entornos de Ejecucion
                                </h3 >
                                <!-- <p>Subtitle</p> -->
                            </div>
                            <div v-for="(item, index) in entornoEjecucion" :key="index" class="carousel-item  white-text" href="#one!">
                                <h4>{{item.name}}</h4>
                                <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" alt="" style="width:150px;">
                                <p class="white-text">{{item.desc}}</p>
                                <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="carousel center">
                            <div class="carousel-fixed-item center">
                                <h3 >
                                    Sistemas Operativos
                                </h3 >
                                <!-- <p>Subtitle</p> -->
                            </div>
                            <div v-for="(item, index) in sO" :key="index" class="carousel-item  white-text" href="#one!">
                                <h4>{{item.name}}</h4>
                                <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" alt="" style="width:150px;">
                                <p class="white-text">{{item.desc}}</p>
                                <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="carousel center">
                            <div class="carousel-fixed-item center">
                                <h3 >
                                    Servidores
                                </h3 >
                                <!-- <p>Subtitle</p> -->
                            </div>
                            <div v-for="(item, index) in servidores" :key="index" class="carousel-item  white-text" href="#one!">
                                <h4>{{item.name}}</h4>
                                <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" alt="" style="width:150px;">
                                <p class="white-text">{{item.desc}}</p>
                                <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="carousel center">
                            <div class="carousel-fixed-item center">
                                <h3 >
                                    Librerías
                                </h3 >
                                <p>Geolocalización</p>
                            </div>
                            <div v-for="(item, index) in servidores" :key="index" class="carousel-item  white-text" href="#one!">
                                <h4>{{item.name}}</h4>
                                <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" alt="" style="width:150px;">
                                <p class="white-text">{{item.desc}}</p>
                                <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <!--
                    <div class="row">
                    <div class="col">
                    </div>
                    <div class="row">
                        <div class="col">
                            <h5>
                                <b>
                                    Lenguajes de Diseño Web
                                </b>
                            </h5>
                            <div class="valign-wrapper">
                                <div v-for="(item, index) in langWebD" :key="index" class="padding-image center">
                                    <a v-bind:href="item.link ? item.link : '#'" target="_blank" rel="noopener noreferrer" class="center white-text">
                                        <img v-bind:src="'/src/assets/img/knowledge/' + item.img + '.png'" v-bind:alt="item.name" v-bind:title="item.name" width='100' height="150">
                                        <p>{{item.name}}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col s12">
                            <div>
                                <h5>
                                    <b>
                                        Frameworks
                                    </b>
                                </h5>
                            </div>
                            <div>
                                <div class="carousel ">
                                    <a v-for="(item, index) in frameworks" :key="index" class="carousel-item" v-bind:href="item.link ? item.link : '#'" target="_blank">
                                        <img v-bind:src="'/src/assets/img/knowledge/' + item.img + '.png'" v-bind:class="item.img == 'react' ? 'rotate' : ''" v-bind:alt="item.name" v-bind:title="item.name" width="100">
                                    </a>
                                </div>
                            </div>
                             <div class="valign-wrapper">
                                <div v-for="(item, index) in frameworks" :key="index" class="padding-image center" >
                                    <a v-bind:href="item.link ? item.link : '#'" target="_blank" rel="noopener noreferrer" class="center white-text">
                                        <img v-bind:src="'/src/assets/img/knowledge/' + item.img + '.png'" v-bind:class="item.img == 'react' ? 'rotate' : ''" v-bind:alt="item.name" v-bind:title="item.name" width='100'>
                                        <p>{{item.name}}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h5>
                                <b>
                                    Entornos de Ejecución
                                </b>
                            </h5>
                            <div class="valign-wrapper">
                                <div v-for="(item, key) in entornoEjecucion" :key="key" class="padding-image center">
                                    <a v-bind:href="item.link ? item.link : '#'" target="_blank" rel="noopener noreferrer" class="center white-text">
                                        <img v-bind:src="'/src/assets/img/knowledge/' + item.img + '.png'" v-bind:alt="item.name" v-bind:title="item.name" width='100'>
                                        <p>{{item.name}}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h5>
                                <b>
                                    Sistemas Operativos
                                </b>
                            </h5>
                            <div class="valign-wrapper">
                                <div v-for="(item, key) in sO" :key="key" class="padding-image center">
                                    <a v-bind:href="item.link ? item.link : '#'" target="_blank" rel="noopener noreferrer" class="center white-text">
                                        <img v-bind:src="'/src/assets/img/knowledge/' + item.img + '.png'" v-bind:alt="item.name" v-bind:title="item.name" width='100'>
                                        <p>{{item.name}}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <h5>
                                <b>
                                    Servidores
                                </b>
                            </h5>
                            <div class="valign-wrapper">
                                <div v-for="(item, key) in servidores" :key="key" class="padding-image center">
                                    <a v-bind:href="item.link ? item.link : '#'" target="_blank" rel="noopener noreferrer" class="center white-text">
                                        <img v-bind:src="'/src/assets/img/knowledge/' + item.img + '.png'" v-bind:alt="item.name" v-bind:title="item.name" width='100'>
                                        <p>{{item.name}}</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
            </div>
        </div>

        
    </div>
</template>

<script setup>
import Conocimientos from "../../components/KnowledgeItems/index.vue";
</script>
<script>
export default {
    data() {
        return {
            show: false,
            langs: [
                {
                    img: "php",
                    name: 'PHP',
                    link: "https://www.php.net/manual/es/intro-whatis.php"
                },
                {
                    img: "javascript",
                    name: 'JavaScript',
                    link: "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript"
                },
                {
                    img: "typescript",
                    name: 'TypeScript',
                    link: "https://es.wikipedia.org/wiki/TypeScript"
                }
            ],
            langWebD: [
                {
                    img: 'css3',
                    name: 'CSS 3',
                    link: 'https://es.wikipedia.org/wiki/CSS'
                },
                {
                    img: 'html5',
                    name: 'HTML 5',
                    link: 'https://es.wikipedia.org/wiki/HTML'
                },
            ],
            frameworks: [
                {
                    img: 'laravel',
                    name: 'Laravel',
                    link: '',
                },
                {
                    img: 'angular',
                    name: 'Angular',
                    link: '',
                },
                {
                    img: 'vue',
                    name: 'Vue JS',
                    link: '',
                },
                {
                    img: 'react',
                    name: 'React JS / React Native',
                    link: '',
                },
                {
                    img: 'ionic',
                    name: 'Ionic',
                    link: '',
                },
                {
                    img: 'expressjs',
                    name: 'Express.JS',
                    link: '',
                },
                {
                    img: 'bootstrap',
                    name: 'Bootstrap',
                    link: '',
                },
            ],
            entornoEjecucion: [
                {
                    img: 'node',
                    name: 'Node JS',
                    link: ''
                }
            ],
            sO: [
                {
                    img: 'windows',
                    name: 'Windows',
                    link: ''
                },
                {
                    img: 'ubuntu',
                    name: 'Ubuntu',
                    link: ''
                },
                {
                    img: 'linux_mint',
                    name: 'Linux Mint',
                    link: ''
                },
            ],
            servidores: [
                {
                    img: 'apache',
                    name: 'Apache HTTP Server',
                    link: ''
                }
            ],
            libGeo: [
                {
                    img: 'leaflet',
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
    },
    methods: {
        loading(){
            this.show = !this.show
        }
    },
}
</script>