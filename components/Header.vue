<template>
  <header class="header">

    <div class="header__container">
      <div class="header-logo">
        <img src="../public/img/logo.svg" alt="logo">
      </div>

      <nav class="header-navigation">
        <ul class="header-navigation__list">
          <li><a>Реализованные проекты</a></li>
          <li><a>Новости</a></li>
          <li><a>Контакты</a></li>
        </ul>
      </nav>
    </div>

    <div class="header-contacts">
      <img src="../public/img/icons/telephone.svg" alt="telephone" class="header-contacts__img">
      <address class="header-contacts__telephone" style="margin-right: 16px;">+7 (900) 900-90-90</address>
      <Button class="header-contacts__button"></Button>

      <div class="header-contacts__form">
        <input id="drawer-open-checkbox" type="checkbox" @click="openMenu">
        <label for="drawer-open-checkbox"></label>
        <Drawer/>
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

  @media (max-width: 870px) {
    display: none;
  }
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
}

@media (max-width: 470px) {
  .header-contacts__img, .header-contacts__telephone {
    display: none;
  }
}

</style>

<script setup>

const openMenu = () => {
  document.body.style.overflowY = "hidden";
}
</script>