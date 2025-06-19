<script setup lang="ts">
</script>

<template>
  <div class="contacts">
    <section class="contacts__section">
      <BreadCrumbs currentPage = "Контакты"/>
      <div class="contacts__content">
        <div>
          <h1>Контакты</h1>
          <Contacts class="contacts__container"/>
        </div>
        <Map/>
      </div>
    </section>
  </div>
</template>

<style scoped>
h1 {
  margin: 0;
  color: black;
  padding: 48px 0px 32px 0px;
}

.contacts__container {
  font-size: 20px;
  color: black;
}

.contacts {
  margin-bottom: 19px;
}

.contacts__content {
  margin: 0px 160px;
  display: flex;
  column-gap: 80px;
  justify-content: space-between;

  @media (max-width: 1200px) {
    margin: 0;
    flex-direction: column;
    row-gap: 48px;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width:  400px) {
    align-items: flex-start;
  }
}

@media (max-width: 769px) {
  .contacts__container {
    font-size: 18px;
  }

  .contacts {
    padding-top: 8px;
  }

  h1 {
    font-size: 32px;
    padding: 32px 0px 24px 0px;
  }
}
</style>