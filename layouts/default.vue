<template>
  <div class="layout">
    <Header/>
      <main class="main-content"></main>
    <Footer/>
  </div>
</template>

<style scoped>

.layout {
  display: flex;
  flex-flow: column;
}

.main-content {
  flex-grow: 1;
}
</style>
<script setup lang="ts">
</script>