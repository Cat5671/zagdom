<template>
  <div class="drawer">
    <div class="drawer__form">
      <img src="../public/img/icons/cross.svg" alt="cross">
      <button id="drawer__button" @click="closeMenu"></button>
    </div>

    <div class="drawer__element">

      <nav class="drawer-navigation">
        <ul class="drawer-navigation__list">
          <li><NuxtLink to="/#projects" @click="closeMenu">Реализованные проекты</NuxtLink></li>
          <li><NuxtLink to="/news" @click="closeMenu">Новости</NuxtLink></li>
          <li><NuxtLink to="/contacts" @click="closeMenu">Контакты</NuxtLink></li>
        </ul>
      </nav>

      <div class="drawer-contacts">
        <Contacts id="contacts"/>
      </div>

    </div>
  </div>

  <div id="drawer-backdrop" @click="closeMenu"></div>
</template>

<style scoped lang="scss">
  @use '../assets/colors' as *;
  @use '../assets/mixins' as *;

  button {
    border: none;
    border-radius: 6px;
  }

  .drawer {
    background-color: $secondary;
    height: calc(100% - 54px - 31px);
    padding: 31px 0px 54px 21px;
    max-width: 600px;
    min-width: 271px;
    transform: translateX(100%);
    position: absolute;
    z-index: 50;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    row-gap: 42px;
    transition: transform .3s ease-in-out;
  }

  .drawer__element {
    height: calc(100% - 42px);
    margin: 42px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .drawer-navigation__list {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  .drawer__form {
    position: relative;
    margin-left: 179px;
  }

  #drawer__button {
    display: block;
    height: 32px;
    width: 32px;
    opacity: 20%;
    background-color: white;
    padding: 0;
  }

  #drawer-backdrop {
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    z-index: 49;
    background-color: black;
  }

  #drawer-open-checkbox {

    &:checked {
      ~ .drawer {
        transform: translateX(0%);
        display: block;
        pointer-events: auto;
      }

      ~ #drawer-backdrop {
        opacity: 40%;
        pointer-events: auto;
      }
    }

    &:not(:checked) {
      ~ .drawer {
        transform: translateX(100%);
        display: none;
      }

      ~ #drawer-backdrop {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  .drawer__form img {
    position: absolute;
    margin: 10.75px 10.76px 10.78px;
  }
</style>

<script setup>
  const closeMenu = () => {
    document.getElementById("drawer-open-checkbox").checked = false;
    document.body.style.overflowY = "visible";
    document.body.style.pointerEvents = "auto";
  };
</script>