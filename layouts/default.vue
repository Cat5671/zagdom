<template>
  <div class="layout">
    <Header/>
    <main class="main">
      <NuxtPage />
    </main>
    <Footer/>
  </div>
</template>

<style scoped>

.layout {
  display: flex;
  flex-flow: column;
}

.main {
  flex-grow: 1;
  padding: 40px 0px 61px 0px;
  overflow: hidden;
  @media (max-width: 769px) {
    padding: 0px 0px 61px 0px;

  }
}

</style>
<script setup lang="ts">
</script>