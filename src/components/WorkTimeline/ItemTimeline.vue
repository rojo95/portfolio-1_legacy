<script>
export default {
  mounted() {
    M.AutoInit();
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
      mostrar() {
        this.show = !this.show
      }
  }
};
</script>

<template>
  <div class="item">
    <i @click="mostrar()">
      <slot name="icon"></slot>
    </i>
    <ul class="collapsible card">
      <li>
        <div class="collapsible-header">
          <h3 class="card-title">
            <slot name="heading"></slot>
          </h3>
        </div>
        <div class="collapsible-body white black-text">
          <slot></slot>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.card-title {
  margin-top: 0 !important;
}
.item {
  margin-top: 2rem;
  width: 100% !important;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-text);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    width: 900px !important;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-background);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-background);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
