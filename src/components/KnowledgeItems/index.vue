<template>
    <div class="carousel center">
        <div class="carousel-fixed-item center">
            <h4 v-if="title">
                {{title}}
            </h4 >
            <p v-if="subtitle">
                {{subtitle}}
            </p>
        </div>
        <div v-for="(item, i) in data" :key="i" class="carousel-item white-text" :href="`#${i}`">
            <h5>
                {{item.name}}
            </h5>
            <img :src="item.img" :class="item.img == 'react' ? 'rotate' : ''" :alt="item.name" :style="`width:${width}; height: ${height}`">
            <!-- <p v-if="item.desc" class="white-text">{{item.desc}}</p> -->
            <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a>
        </div>
    </div>
</template>

<script src="./knowledge.js"></script>