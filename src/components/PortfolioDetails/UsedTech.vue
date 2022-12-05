<script setup>
import Item from './ItemTech.vue';
</script>
<script>
export default {
    props: {
      techs: Object,
    },
}
</script>

<template>
    <ul class="collection with-header">
        <li class="collection-header black-text"><h5>Tecnologías Utilizadas</h5></li>
            <Item v-for="(item, i) in techs" :key="i" :data="item"/>
    </ul>
</template>