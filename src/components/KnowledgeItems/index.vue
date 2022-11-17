<template>
    <div>
        <div class="carousel center">
            <div class="carousel-fixed-item center">
                <h3 >
                    {{title}}
                </h3 >
                <p v-if="subtitle">{{subtitle}}</p>

            </div>
            <div v-for="(item, index) in info" :key="index" class="carousel-item  white-text">
                <!-- <h4>{{item.name}}</h4>
                <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" alt="" style="width:150px;">
                <p class="white-text">{{item.desc}}</p>
                <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a> -->
            </div>
        </div>
    </div>
    <!-- <div>
        <div>
            <h5>
                <b>
                    {{title}}
                </b>
            </h5>
            <h6>{{subtitle}}</h6>
        </div>
        <div class="valign-wrapper">
            <div v-for="(item, index) in data" :key="index" class="padding-image center">
                <a class="white-text modal-trigger" href="#modal1">
                    <img :src="'/src/assets/img/knowledge/' + item.img + '.png'" :class="item.img == 'react' ? 'rotate' : ''" :alt="item.name" :title="item.name" width='100'>
                    <p>{{item.name}}</p>
                </a>
                <div id="modal1" class="modal black-text card">
                    <div class="card-image" style="height: 200px; overflow: hidden">
                        <img src="https://leafletjs.com/examples/quick-start/thumbnail.png">
                        <span class="card-title black-text">
                            <b>
                                {{item.name}}
                            </b>
                        </span>
                    </div>
                    <div class="modal-content">
                        <p class="justify">{{item.desc}}</p>
                    </div>
                    <div class="modal-footer">
                        <a href="#!" class="modal-close waves-effect waves-green btn-flat">Cerrar</a>
                        <a :href="item.link" target="_blank" class="modal-close waves-effect waves-green btn-flat">Documentación</a>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    data: Array
  },
  data() {
    return {
        info: this.data
    }
  },
  mounted() {
    console.log(this.data);
  },
}
</script>