<template>
  <button>Оставить заявку</button>
</template>

<style lang="scss" scoped>
  @use '../assets/mixins' as *;
  @use '../assets/colors' as *;

  button {
    border: 2px solid $dark;
    background-color: $dark;
    @include btn-styles(49px, 204px);
    color: white;
  }

  button:hover {
    background-color: $primary;
    border: 2px solid $primary;
  }

  button:active {
    background-color: $secondary;
    border: 2px solid $secondary;
  }

  button:focus {
    background-color: $primary;
    border: 2px solid $secondary;
  }
</style>