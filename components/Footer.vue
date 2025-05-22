<template>
  <footer class="footer">

    <div class="footer-footer">

      <div class="footer-logo">
        <img src="../public/img/logo_footer.svg" alt="logo">
        <p class="footer-logo__text">© Загдом, 2021</p>
      </div>

      <div class="footer-links">
        <div class="footer-menu">
          <nav class="footer-navigation">
            <ul class="footer-navigation__list">
              <li><a>Реализованные проекты</a></li>
              <li><a>Новости</a></li>
              <li><a>Контакты</a></li>
            </ul>
          </nav>
          <p class="footer-menu__text">Политика конфиденциальности</p>
        </div>

        <div class="footer-contacts">
          <div class="footer-contacts__list">

            <div class="footer-contacts__telephone">
              <img src="../public/img/icons/telephone.svg" alt="telephone">
              <address>+7 (900) 900-90-90</address>
            </div>

            <div class="footer-contacts__email">
              <img src="../public/img/icons/email.svg" alt="email">
              <address>info@gmail.com</address>
            </div>

            <div class="footer-contacts__address">
              <img src="../public/img/icons/address.svg" alt="address">
              <address>г. Владивосток <br>ул. Выселковая 49, стр. 3</address>
            </div>

          </div>
          <p class="footer-contacts__text">Пользовательское соглашение</p>
        </div>
      </div>

      <div style="display: flex; flex-direction: column; row-gap: 40px;">
        <Button/>
        <div id=hidden-links>
          <p class="hidden-links__elem">© Загдом, 2021</p>
          <p class="hidden-links__elem">Политика конфиденциальности</p>
          <p class="hidden-links__elem">Пользовательское соглашение</p>
        </div>
      </div>

    </div>
  </footer>
</template>

<style scoped>

  .footer-footer {
    display: flex;
    justify-content: space-between;
    margin-top: 31.5px;
    margin-bottom: 33px;
    flex-wrap: wrap;
  }

  .footer-navigation__list, .footer-contacts__list{
    display: flex;
    flex-direction: column;
    row-gap: 24px;
  }

  .footer-contacts__list * {
    display: flex;
    align-items: flex-start;
    column-gap: 8px;
  }

  .footer-navigation__list {
    padding: 0;
  }

  .footer-logo {
    margin-top: 5.5px;

    @media (max-width: 1200px) {
      margin-right: 40px;
    }
  }

  .footer-menu {
    margin-top: 1px;

    @media (min-width: 1200px) {
      margin-right: 90px;
    }
  }

  .footer-contacts {
    margin-top: 15.5px;
    color: white;
  }

  .footer-menu, .footer-logo, .footer-contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer-contacts__text {
    margin-top: 32px;
    margin-left: 9px;
  }

  .footer-links {
    display: flex;
    @media (max-width: 1280px) {
      max-width: 550px;
      min-width: 490px;
      justify-content: space-between;
    }

    @media (min-width: 1280px) {
      margin-right: 90px;
    }
  }

  .footer-menu__text {
    margin-left: 6px;
  }

  #hidden-links {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    @media (min-width: 530px) {
      display: none;
    }
  }


  .hidden-links__elem {
    margin-top: 0px;
    margin-bottom: 0px;
  }

  @media (max-width: 530px) {

    .footer-footer {
      margin: 40px 0px 40.46px 40px;
      row-gap: 40px;
    }

    .footer-navigation__list {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .footer-contacts, .footer-menu {
        margin-top: 0px;
    }

    .footer-links {
      flex-direction: column;
      row-gap: 40px;
    }

    .footer-logo__text, .footer-contacts__text, .footer-menu__text {
      display: none;
    }
  }

  footer {
    flex-shrink: 0;
  }

  p {
    opacity: 60%;
  }

  .footer-contacts__telephone address {
    width: 134px;
  }
</style>
<script setup lang="ts">
</script>