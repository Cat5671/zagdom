<script setup>
  import BreadCrumbs from "~/components/BreadCrumbs.vue";
</script>

<template>
  <section class="news__section news-page">
    <BreadCrumbs currentPage = "Новости"/>

    <h1 class="news-page__header">Новости</h1>
    <div class="news-page__cards">
      <News/>
      <News/>
      <News/>
    </div>
    <div class="news-page__buttons buttons">
      <ArrowButton class="disabled"/>
      <div class="buttons__num">
        <button>1</button>
        <button>2</button>
        <button>...</button>
        <button>9</button>
        <button>10</button>
      </div>
      <ArrowButton/>
    </div>
  </section>

</template>

<style scoped lang="scss">
  @use '../assets/mixins' as *;

  h4 {
    padding: 0;
    margin: 0px 0px 48px 0px;
  }

  h1 {
    color: black;
    margin: 0;
    padding-bottom: 16px;
  }

  .news__section {
    padding-bottom: 19px;
  }

  button {
    height: 46px;
    width: 46px;
  }

  .news-page__buttons {
    display: flex;
    column-gap: 24px;
    justify-content: center;
  }

  .news-page__buttons div {
    display: flex;
    column-gap: 8px;
  }

  .news-page__cards {
    padding-bottom: 24px;
  }

  @media (max-width: 769px) {
    .news-page__buttons {
      padding-bottom: 16px;
    }

    h4 {
      margin: 0px 0px 32px 0px;
    }

    .news__section {
      padding-top: 8px;
    }

    .news-page__buttons div button:nth-child(even) {
      display: none;
    }

    h1 {
      font-size: 32px;
    }
  }

  .buttons__num * {
    border-radius: 10px;
  }

  button:first-child {
    transform: scale(-1);
  }

</style>