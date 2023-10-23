<script src="./knowledge.js"></script>

<template>
  <div class="center">
    <h5 v-if="title">
      {{ title }}
    </h5>
    <p v-if="subtitle">
      {{ subtitle }}
    </p>
  </div>
  <div class="carousel center">
    <div
      v-for="(item, i) in data"
      :key="i"
      class="carousel-item white-text"
      :href="`#${i}`"
    >
      <div v-if="item.link">
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank"
          class="waves-effect white-text darken-text-2"
        >
          <h6>
            {{ item.name }}
          </h6>
          <img
            :src="item.img"
            :class="item.name == 'React JS / React Native' ? 'rotate' : ''"
            :alt="item.name"
            :style="`width:${width}; height: ${height}`"
          />
          <!-- <p v-if="item.desc" class="white-text">{{ item.desc }}</p> -->
        </a>
      </div>
      <div v-else>
        <h6>
          {{ item.name }}
        </h6>
        <img
          :src="item.img"
          :class="item.name == 'React JS / React Native' ? 'rotate' : ''"
          :alt="item.name"
          :style="`width:${width}; height: ${height}`"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  margin-top: -80px !important;
}
.rotate {
  animation: 3s rotate linear infinite;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
