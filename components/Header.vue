<template>
  <header class="header">

    <div class="logo">
      <img src="../public/img/logo.svg" alt="logo">
    </div>

    <nav class="navigation">
      <ul class="navigation__list">
        <li><a>Реализованные проекты</a></li>
        <li><a>Новости</a></li>
        <li><a>Контакты</a></li>
      </ul>
    </nav>

    <div class="contacts">
      <img src="../public/img/icons/telephone.svg" alt="telephone">
      <address class="contacts__telephone">+7 (900) 900-90-90</address>
      <Button></Button>
    </div>
  </header>
</template>

<style scoped lang="scss">

.header {
  margin: 24px 88px;
  display: flex;
  justify-content: space-between;
}

.navigation__list {
  width: 384px;
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
}

.contacts {
  display: flex;
  margin-left: 254px;
  width: 386px;
}

.contacts__telephone {
  margin: 16px 24px 16px 8px;
  font-style: normal;
}

</style>