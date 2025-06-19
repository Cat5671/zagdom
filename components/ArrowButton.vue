<template>
  <button><div class="arrow"></div></button>
</template>

<style scoped lang="scss">
  @use '../assets/colors' as *;
  @use '../assets/mixins' as *;

  button {
    background-color: white;
    @include btn-styles(46px, 46px);
    border: 1px solid $secondary;
    padding: 0;
  }

  .arrow {
    display: block;
    mask-image: url("../public/img/icons/arrow.svg");
    mask-repeat: no-repeat;
    mask-position: center;
    height: 46px;
    width: 46px;
    background-color: $primary;
  }

  .arrow:hover, .arrow:active {
    background-color: white;
  }

  button:hover {
    background-color: $primary;
    border: 1px solid $primary;
  }

  .disabled_arrow {
  background-color: #D7D7D7;
  }

  button:active {
    background-color: $secondary;
    border: 1px solid $secondary;
  }

  button:focus {
    background-color: #EEEEEE;
    border: 1px solid #9D9C9C;
  }

  .arrow:focus {
    background-color: #BDBDBD;
  }

  .disabled {
    background-color: #FAFAFA;
    border: 1px solid #D7D7D7;
    pointer-events: none;
    color: #D7D7D7
  }
</style>