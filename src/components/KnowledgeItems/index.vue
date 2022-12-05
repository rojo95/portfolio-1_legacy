<script src="./knowledge.js"></script>

<template>
    <div class="carousel center">
        <div class="carousel-fixed-item center">
            <h5 v-if="title">
                {{title}}
            </h5 >
            <p v-if="subtitle">
                {{subtitle}}
            </p>
        </div>
        <div v-for="(item, i) in data" :key="i" class="carousel-item white-text" :href="`#${i}`">
            <h6>
                {{item.name}}
            </h6>
            <img :src="item.img" :class="item.name == 'React JS / React Native' ? 'rotate' : ''" :alt="item.name" :style="`width:${width}; height: ${height}`">
            <!-- <p v-if="item.desc" class="white-text">{{item.desc}}</p> -->
            <!-- <a class="btn waves-effect purple white-text darken-text-2"> Ver Más</a> -->
        </div>
    </div>
</template>

<style scoped>
.rotate {
    animation: 3s rotate linear infinite;
}
@keyframes rotate {
    from {
        transform: rotate(0deg)
    }
    to {
        transform: rotate(360deg)
    }
}
</style>