<template>
  <header class="header">
    <div class="header__container">
      <div class="header-logo">
        <img src="../public/img/logo.svg" alt="logo">
      </div>

      <nav class="header-navigation">
        <ul class="header-navigation__list">
          <li><NuxtLink to="/#projects" @click="changePage('/projects')">Реализованные проекты</NuxtLink></li>
          <li><NuxtLink to="/news" :class="{ active_nav: activeLink === '/news' }"
                        @click="changePage('/news')">Новости</NuxtLink></li>
          <li><NuxtLink to="/contacts" :class="{ active_nav: activeLink === '/contacts' }"
                        @click="changePage('/contacts')">Контакты</NuxtLink></li>
        </ul>
      </nav>
    </div>

    <div class="header-contacts">
      <TelephoneContact id="telephone" style="padding-right: 16px;"/>
      <Dialog v-model:open="dialogOpened"/>
      <Button @click='dialogOpened = true' class="header-contacts__button"/>

      <div class="header-contacts__form">
        <input id="drawer-open-checkbox" type="checkbox" @click="openMenu">
        <label for="drawer-open-checkbox"></label>
        <Drawer style="display: none;"/>
      </div>

    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  margin-top: 24px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
}

.header-navigation__list {
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  column-gap: 24px;
  align-items: center;
  flex-wrap: wrap;
}

.header-contacts {
  display: flex;
  align-items: center;
  column-gap: 8px;
  margin-left: 56px;
}

.header__container {
  display: flex;
  column-gap: 40px;

  @media (max-width: 1060px){
    column-gap: 0px;
  }
}

.header-contacts__form {
  display: none;
  background-image: url("../public/img/icons/burger.svg");
  background-repeat: no-repeat;
  background-position: center;
}

  @media (max-width: 870px) {

    .header-contacts__button {
      display: none;

    }
    .header-contacts__form {
      display: block;
    }

    .header-navigation__list {
      display: none;
    }
}

@media (max-width: 470px) {
  .header-contacts__img, #telephone {
    display: none;
  }
}

#drawer-open-checkbox:hover {
  cursor: pointer;
}
</style>

<script setup>
import {mockContacts} from "~/mock/contacts.js";
import { ref } from 'vue';
import Dialog from "~/components/Dialog.vue";


const activeLink = ref('');
const { phone } = mockContacts;

const openMenu = () => {
  document.body.style.overflowY = "hidden";
  document.body.style.pointerEvents = "none";
}

const changePage = (link) => {
  if (link === '/#projects') {
    document.querySelector(".active_nav").classList.remove("active_nav");
  }
  activeLink.value = link;
};

const dialogOpened = ref(false);
</script>