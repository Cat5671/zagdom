<script setup>
import { defineProps } from 'vue';

const props = defineProps({

  image: {
    x1: String,
    x2: String,
  },
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div class="news__item news">
    <picture>
      <source :srcset='`${image.x2} 2x, ${image.x1}`'>
      <img :src='image.x1' :alt='title' class='image' />
    </picture>
    <span class="news__date">
      {{ date }}
    </span>
    <div class="news__text">
      <h4 class="news__title">{{ title }}</h4>
      <p class="news__description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
  .image {
    border-radius: 20px 20px 0px 0px;
    @media (max-width: 769px) {
      width: 344px;
    }
  }

  .news {
    width: 304px;
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    @media (max-width: 769px) {
      width: 344px;
    }
  }

  .news * {
    padding: 0;
    margin: 0;
  }

  .news__text {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
</style>