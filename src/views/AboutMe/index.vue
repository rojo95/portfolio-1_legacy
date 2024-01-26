<script setup>
import Conocimientos from "../../components/KnowledgeItems/index.vue";
import Layout from "../../layouts/index.vue";
import axios from 'redaxios';
import html2pdf from "html2pdf.js";
</script>
<script>
export default {
    data() {
        return {
            show: false,
            experienceY: 0,
            langs: [
                {
                    img: new URL(`../../assets/img/knowledge/php.png`, import.meta.url).href,
                    name: 'PHP',
                    link: "https://www.php.net/manual/es/intro-whatis.php"
                },
                {
                    img: new URL(`../../assets/img/knowledge/javascript.png`, import.meta.url).href,
                    name: 'JavaScript',
                    link: "https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript#una_definici%C3%B3n_de_alto_nivel"
                },
                {
                    img: new URL(`../../assets/img/knowledge/yaml-logo.png`, import.meta.url).href,
                    name: 'Yaml',
                    link: "https://es.wikipedia.org/wiki/YAML"
                },
                {
                    img: new URL(`../../assets/img/knowledge/typescript.png`, import.meta.url).href,
                    name: 'TypeScript',
                    link: "https://www.typescriptlang.org/"
                },
            ],
            langWebD: [
                {
                    img: new URL(`../../assets/img/knowledge/css3.png`, import.meta.url).href,
                    name: 'CSS 3',
                    link: 'https://www.w3.org/Style/CSS/'
                },
                {
                    img: new URL(`../../assets/img/knowledge/html5.png`, import.meta.url).href,
                    name: 'HTML 5',
                    link: 'https://es.wikipedia.org/wiki/HTML'
                },
                {
                    img: new URL(`../../assets/img/knowledge/scss.png`, import.meta.url).href,
                    name: 'SCSS',
                    link: 'https://sass-lang.com/'
                },
                {
                    img: new URL(`../../assets/img/knowledge/twig-logo.png`, import.meta.url).href,
                    name: 'Twig',
                    link: 'https://twig.symfony.com/'
                },
                {
                    img: new URL(`../../assets/img/knowledge/material-ui-logo.png`, import.meta.url).href,
                    name: 'Material UI',
                    link: 'https://mui.com/material-ui/getting-started/'
                },
                {
                    img: new URL(`../../assets/img/knowledge/vuetify-logo-v3.png`, import.meta.url).href,
                    name: 'Vuetify 3',
                    link: 'https://vuetifyjs.com/en/introduction/why-vuetify/#what-is-vuetify3f/',
                },
                {
                    img: new URL(`../../assets/img/knowledge/bootstrap.png`, import.meta.url).href,
                    name: 'Bootstrap',
                    link: 'https://getbootstrap.com/',
                },
                {
                    img: new URL(`../../assets/img/knowledge/tailwind-css-logo.png`, import.meta.url).href,
                    name: 'Tailwind Css',
                    link: 'https://tailwindcss.com/',
                },
                {
                    img: new URL(`../../assets/img/knowledge/styled_components.png`, import.meta.url).href,
                    name: 'Styled Components',
                    link: 'https://styled-components.com/'
                },
                {
                    img: new URL(`../../assets/img/knowledge/figma.png`, import.meta.url).href,
                    name: 'Figma',
                    link: 'https://www.figma.com/'
                }
            ],
            frameworks: [
                {
                    img: new URL(`../../assets/img/knowledge/react.png`, import.meta.url).href,
                    name: 'React JS / React Native',
                    link: 'https://legacy.reactjs.org/',
                },
                {
                    img: new URL(`../../assets/img/knowledge/laravel.png`, import.meta.url).href,
                    name: 'Laravel',
                    link: 'https://laravel.com/',
                },
                {
                    img: new URL(`../../assets/img/knowledge/nuxt.png`, import.meta.url).href,
                    name: 'Nuxt Js',
                    link: 'https://nuxt.com/',
                },
                {
                    img: new URL(`../../assets/img/knowledge/next.png`, import.meta.url).href,
                    name: 'Next Js',
                    link: 'https://nextjs.org/learn/foundations/about-nextjs/what-is-nextjs',
                },
                {
                    img: new URL(`../../assets/img/knowledge/angular.png`, import.meta.url).href,
                    name: 'Angular',
                    link: 'https://angular.io/guide/what-is-angular',
                },
                {
                    img: new URL(`../../assets/img/knowledge/vue.png`, import.meta.url).href,
                    name: 'Vue JS',
                    link: 'https://vuejs.org/guide/introduction.html#what-is-vue',
                },
                {
                    img: new URL(`../../assets/img/knowledge/ionic.png`, import.meta.url).href,
                    name: 'Ionic',
                    link: 'https://ionicframework.com/',
                },
                {
                    img: new URL(`../../assets/img/knowledge/expressjs.png`, import.meta.url).href,
                    name: 'Express.JS',
                    link: 'https://expressjs.com/',
                },
                {
                    img: new URL(`../../assets/img/knowledge/symfony-logo.png`, import.meta.url).href,
                    name: 'Symfony 6',
                    link: 'https://symfony.com/',
                }
            ],
            entornoEjecucion: [
                {
                    img: new URL(`../../assets/img/knowledge/node.png`, import.meta.url).href,
                    name: 'Node JS',
                    link: 'https://nodejs.org/es'
                }
            ],
            sO: [
                {
                    img: new URL(`../../assets/img/knowledge/windows.png`, import.meta.url).href,
                    name: 'Windows',
                    link: 'https://es.wikipedia.org/wiki/Microsoft_Windows'
                },
                {
                    img: new URL(`../../assets/img/knowledge/ubuntu.png`, import.meta.url).href,
                    name: 'Ubuntu',
                    link: 'https://es.wikipedia.org/wiki/Ubuntu'
                },
                {
                    img: new URL(`../../assets/img/knowledge/linux_mint.png`, import.meta.url).href,
                    name: 'Linux Mint',
                    link: 'https://es.wikipedia.org/wiki/Linux_Mint'
                },
                {
                    img: new URL(`../../assets/img/knowledge/Debian_logo.png`, import.meta.url).href,
                    name: 'Debian',
                    link: 'https://es.wikipedia.org/wiki/Debian_GNU/Linux'
                },
            ],
            servidores: [
                {
                    img: new URL(`../../assets/img/knowledge/apache.png`, import.meta.url).href,
                    name: 'Apache HTTP Server',
                    link: 'https://httpd.apache.org/'
                }
            ],
            virtualizacion: [
                {
                    img: new URL(`../../assets/img/knowledge/docker-logo.png`, import.meta.url).href,
                    name: 'Docker',
                    link: 'https://docs.docker.com/get-started/overview/'
                }
            ],
            libs: [
                {
                    img: new URL(`../../assets/img/knowledge/leaflet.png`, import.meta.url).href,
                    name: 'Leaflet',
                    lang: 'JavaScript',
                    link: 'https://leafletjs.com',
                    desc: 'Leaflet es la principal biblioteca JavaScript de código abierto para mapas interactivos compatibles con dispositivos móviles. Con un peso aproximado de 42 KB de JS, tiene todas las características de mapeo que la mayoría de los desarrolladores necesitan. Leaflet está diseñado teniendo en cuenta la simplicidad, el rendimiento y la facilidad de uso. Funciona de manera eficiente en todas las principales plataformas móviles y de escritorio, se puede ampliar con muchos complementos, tiene una API hermosa, fácil de usar y bien documentada y un código fuente simple y legible al que es un placer contribuir.'
                },
                {
                    img: new URL(`../../assets/img/knowledge/ng-bootstrap.png`, import.meta.url).href,
                    name: 'ng-bootstrap',
                    lang: 'JavaScript',
                    link: 'https://ng-bootstrap.github.io/#/home',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/react-rnd.png`, import.meta.url).href,
                    name: 'react-rnd',
                    lang: 'JavaScript',
                    link: 'https://www.npmjs.com/package/react-rnd',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/jquery.png`, import.meta.url).href,
                    name: 'jQuery',
                    lang: 'JavaScript',
                    link: 'https://www.npmjs.com/package/react-rnd',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/chartjs.png`, import.meta.url).href,
                    name: 'Chart.js',
                    lang: 'JavaScript',
                    link: 'https://www.chartjs.org/',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/aframe-logo.png`, import.meta.url).href,
                    name: 'A-Frame',
                    lang: 'JavaScript',
                    link: 'https://aframe.io/docs/1.4.0/introduction/',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/three-js-logo.png`, import.meta.url).href,
                    name: 'Three JS',
                    lang: 'JavaScript',
                    link: 'https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene',
                    desc: ''
                }
            ],
            cms: [
                {
                    img: new URL(`../../assets/img/knowledge/wordpress.png`, import.meta.url).href,
                    name: 'WordPress',
                    link: 'https://wordpress.com',
                    desc: ''
                }
            ],
            db: [
                {
                    img: new URL(`../../assets/img/knowledge/mongo.png`, import.meta.url).href,
                    name: 'Mongo DB',
                    link: 'https://www.mongodb.com/es/what-is-mongodb',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/postgresql.png`, import.meta.url).href,
                    name: 'PostgreSQL',
                    link: 'https://www.postgresql.org/',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/mysql.png`, import.meta.url).href,
                    name: 'MySQL',
                    link: 'https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/sqlite.png`, import.meta.url).href,
                    name: 'SQLite',
                    link: 'https://www.sqlite.org/index.html',
                    desc: ''
                },{
                    img: new URL(`../../assets/img/knowledge/sqlserver.png`, import.meta.url).href,
                    name: 'Mycrosoft SQL Server',
                    link: 'https://learn.microsoft.com/en-us/sql/sql-server/what-is-sql-server?view=sql-server-ver16',
                    desc: ''
                },
            ],
            version: [
                {
                    img: new URL(`../../assets/img/knowledge/github.png`, import.meta.url).href,
                    name: "GitHub",
                    link: 'https://github.com/',
                    desc: ''
                },
                {
                    img: new URL(`../../assets/img/knowledge/gitlab.png`, import.meta.url).href,
                    name: "GitLab",
                    link: 'https://about.gitlab.com/',
                    desc: ''
                }
            ]
        }
    },
    mounted() {
        M.AutoInit(); 
        this.experienceYears()
    },
    methods: {
        loading(){
            this.show = true
            // this.show = !this.show
        },
        async experienceYears() {
            return await axios.get(new URL("../../assets/information/works.json", import.meta.url).href)
            .then((result) => {
                let today = new Date;
                let firstJob = result.data.data.reverse()[0].inicio;
                firstJob = new Date(firstJob)
                this.experienceY = today.getFullYear() - firstJob.getFullYear();
            })
        },
        exportPDF() {
            const d = new Date();
            html2pdf(document.getElementById("element-to-convert"), {
				margin: 3,
                filename: `Johan Román CV ${d.getHours()}_ ${d.getDay()==5 ? '0' : d.getDay()+1}-${d.getMonth()+1}-${d.getFullYear()}.pdf`,
                outputImg: "img"
			});
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
            <div class="row" id="element-to-convert">
                
                <div class="col l6 s12">
                    <div class="row">
                        <div class="col s12">
                            <p class="flow-text text-justify paragraph">
                                ¡Hola! Soy un Ingeniero en Informática con más de {{ experienceY }} años de experiencia en el área y me especializo en el desarrollo de sistemas informáticos.
                                <br>
                                Me considero una persona responsable, organizada, proactiva, comunicativa, creativa e investigativa, siempre dispuesta a aprender nuevos conocimientos y a asumir retos de cualquier tipo. Me apasiona la tecnología y la innovación, y siempre busco estar al día con las últimas tendencias en el campo de la informática. Mi experiencia laboral ha sido en distintos proyectos que me han permitido desarrollar habilidades en diversas áreas del desarrollo de software, desde el análisis y diseño hasta la implementación y mantenimiento. Estoy seguro de que mi perfil profesional puede ser un gran aporte para cualquier proyecto en el que se requiera un enfoque tecnológico y creativo.
                                <br>&nbsp;
                            </p>
                        </div>
                        <div class="col s12 small-show">
                            <div class="center">
                                <img class="profile responsive-img border-green" v-bind:class="{'rotation' : show , 'hidden': !show}" src="../../assets/img/foto_2.webp"  @load="loading()">
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
                        <img class="profile responsive-img border-green" v-bind:class="{'rotation' : show , 'hidden': !show}" src="../../assets/img/foto_2.webp"  @load="loading()">
                    </div>
                </div>
            </div>
            
            <div class="row">
                <div class="col s12">
                </div>
            </div>

            <div class="row">
                <div class="col m6 s12">
                    <h5>Habilidades lingüísticas:</h5>  
                    <p class="flow-text paragraph">
                        <ul>
                            <li>Español: Nativo</li>
                            <li>
                                Ingles: nivel B2 (Intermedio)
                            </li>
                            <li>
                                Portugués: nivel B1 (Elemental)
                            </li>
                        </ul>
                    </p>
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <h5><strong>Habilidades en Tecnología de la Información.</strong></h5>
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
                    <Conocimientos title="Bases de Datos" :data="db"/>
                </div>
                <div class="col m6 s12">
                    <Conocimientos title="CMS" :data="cms"/>
                </div>
            </div>

            <div class="row">
                <div class="col m6 s12">
                    <Conocimientos title="Sistemas Operativos" :data="sO"/>
                </div>
                <div class="col m6 s12">
                    <Conocimientos title="Virtualizadores" :data="virtualizacion"/>
                </div>
            </div>
            
            <div class="row">
                <div class="col m6 s12">
                    <Conocimientos title="Servidores" :data="servidores"/>
                </div>
                <div class="col m6 s12">
                    <Conocimientos title="Librerías" :data="libs"/>
                </div>
            </div>

            <div class="row">
                <div class="col m6 s12">
                    <Conocimientos title="Control de Versiones" :data="version"/>
                </div>
                <div class="col m6 s12">
                </div>
            </div>

            <!--button @click="exportPDF">dale con todo</button-->
        </template>
    </Layout>
</template>


<!-- <style src="./aboutMe.css"></style> -->
<style scoped>
.small-show {
    display: none;
}

.text-justify {
    text-align: justify;
}

.profile {
    width:300px;
    height:300px;
    /* border-radius: 50%; */
    /* border:10px solid var(--color-custom-green); */
    transition: .5s;
}

.profile:hover {
    transition: .5s;
    filter: drop-shadow(0 0 2em var(--color-custom-purple));
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
</style>