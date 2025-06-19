<script setup lang="ts">
  const props = defineProps({
    currentPage: {
      type: String,
    }
  });
</script>

<template>
  <h4 class="breadcrumbs"><span><NuxtLink to="/">Главная</NuxtLink></span> / {{ currentPage }}</h4>
</template>

<style scoped lang="scss">
@use '../assets/colors' as *;

  .breadcrumbs span {
  color: $secondary;
}
</style>