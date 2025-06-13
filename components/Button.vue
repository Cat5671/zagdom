<template>
  <button>Оставить заявку</button>
</template>

<style lang="scss" scoped>
  @use '../assets/colors' as *;

  button {
    border: 2px solid $dark;
    background-color: $dark;
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