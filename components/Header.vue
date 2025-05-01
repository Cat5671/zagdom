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
      <img src="../public/img/icons/telephone.svg" alt="telephone">
      <address class="header-contacts__telephone" style="margin-right: 16px;">+7 (900) 900-90-90</address>
      <Button></Button>
    </div>
  </header>
</template>

<style scoped lang="scss">

.header {
  margin: 24px 88px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
}

.header-navigation__list {
  width: 384px;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header-contacts {
  display: flex;
  align-items: center;
  column-gap: 8px;
}

.header__container {
  display: flex;
  column-gap: 40px;
}

</style>
<script setup lang="ts">
</script>