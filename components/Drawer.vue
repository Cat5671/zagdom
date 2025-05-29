<template>
  <div id="drawer-backdrop" @click="closeMenu"></div>
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
          <li><a>Контакты</a></li>
        </ul>
      </nav>

      <div class="drawer-contacts">

        <div class="drawer-contacts__telephone">
          <div class="telephone"></div>
          <address>+7 (900) 900-90-90</address>
        </div>

        <div class="drawer-contacts__email">
          <div class="email"></div>
          <address>info@gmail.com</address>
        </div>

        <div class="drawer-contacts__address">
          <div class="address"></div>
          <address>г. Владивосток <br>ул. Выселковая 49, стр. 3</address>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
  @use '../assets/colors' as *;
  @use '../assets/mixins' as *;

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
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .drawer-navigation__list, .drawer-contacts{
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  .drawer-contacts * {
    display: flex;
    align-items: flex-start;
    column-gap: 8px;
  }

  .telephone, .email, .address {
    height: 16px;
    width: 16px;
    background-color: white;
    display: block;
  }

  .telephone {
    mask-image: url(../public/img/icons/telephone.svg);
  }

  .email {
    mask-image: url(../public/img/icons/email.svg);
  }

  .address {
    mask-image: url(../public/img/icons/address.svg);
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
      }

      ~ #drawer-backdrop {
        opacity: 40%;
        pointer-events: auto;
      }
    }

    &:not(:checked) {
      ~ .drawer {
        transform: translateX(100%);
      }

      ~ #drawer-backdrop {
        opacity: 0;
        pointer-events: none;
      }
    }
  }

  .drawer-contacts {
    color: white;
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
  };
</script>