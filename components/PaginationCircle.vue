<template>
  <div class="pagination-circle"></div>
</template>

<style scoped lang="scss">
  @use '../assets/colors' as *;

  .pagination-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    @media (max-width: 769px) {
      display: none;
    }
  }

  .pagination-circle{
    background-color: $gray;
  }

  .active {
    background-color: $secondary;
  }

</style>