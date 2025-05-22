<template>
  <section class="about-us__section">
    <Slider/>
    <div class="about-us">
      <div class="about-us__text">
        <h2>Каждый проект<br>для нас — важный</h2>
        <p id="paragraph">Мы строительная компания полного цикла.</p>
        <p id="paragraph">
          Вникаем во все детали, разрабатываем планировку<br>
          будущего дома, продумываем конструктивные решения<br>
          и общую архитектурную концепцию</p>
      </div>
      <div class="about-us__cards cards">
        <div class="cards__elem">
          <img src="../public/img/icons/house.svg" alt="house">
          <h3>57 домов</h3>
          <p id="paragraph">спроектировали и построили “под ключ”</p>
        </div>
        <div class="cards__elem">
          <img src="../public/img/icons/calendar.svg" alt="calendar">
          <h3>14 лет</h3>
          <p id="paragraph">мы на рынке загородного строительства</p>
        </div>
      </div>
    </div>
  </section>
  <section class="projects__section">
    <Projects/>
  </section>
  <section class="news__section">
    <header>
      <h2>Новости</h2>
      <a href="/news" class="button">Все новости</a>
    </header>
    <News/>
  </section>
</template>
<style scoped>

  .about-us__section {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    margin-bottom: 120px;
    @media (max-width: 1074px) {
      margin-bottom: 40px;
    }
  }

  h2 {
    margin: 0;
  }

  .about-us__text {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
  }

  .about-us {
    display: flex;
    justify-content: space-between;
    column-gap: 16px;
    flex-wrap: wrap;
    @media (max-width: 1085px) {
      justify-content: space-evenly;
    }
  }

  .about-us__cards {
    margin-top: 92px;
    display: flex;
    column-gap: 16px;
    flex-wrap: wrap;
    @media (max-width: 1390px) {
      margin-top: 33px;
      flex-direction: column;
      row-gap: 12px;
    }
  }

  .cards__elem {
    width: 256px;
    height: 139px;
    padding: 24px;
    border-radius: 20px;
    @media (max-width: 1390px) {
      max-width: 296px;
      min-width: 260px;
    }
  }

  .cards__elem img {
    margin-bottom: 24px;
  }

  .news__section {
    display: flex;
    flex-direction: column;
    row-gap: 32px;
    margin-top: 80px;
    @media (max-width: 769px) {
      row-gap: 22px;
    }
  }

  .news__section header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  header a {
    text-decoration: none;
    width: 91.4px;
    height: 15.4px;
    border-radius: 10px;
    padding: 16px 24px;
  }

</style>
<script setup>
</script>