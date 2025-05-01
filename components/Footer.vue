<template>
  <footer class="footer">

    <div class="footer-footer">

      <div class="footer-logo">
        <img src="../public/img/logo_footer.svg" alt="logo">
        <p>© Загдом, 2021</p>
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
          <p>Политика конфиденциальности</p>
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
      <Button></Button>
    </div>
  </footer>
</template>

<style scoped>

  .footer-footer {
    display: flex;
    justify-content: space-between;
    margin: 31.5px 87.5px 33px 88px;
  }

  .footer-navigation__list, .footer-contacts__list{
    display: flex;
    flex-direction: column;
    row-gap: 24px;

  }

  .footer-contacts__telephone, .footer-contacts__email, .footer-contacts__address {
    display: flex;
    align-items: flex-start;
    column-gap: 8px;
  }

  .footer-navigation__list {
    padding: 0;
  }

  .footer-logo {
    margin-top: 5.5px;
  }

  .footer-menu {
    margin-top: 1px;
    margin-right: 122px;
  }

  .footer-contacts {
    margin-top: 15.5px;
  }

  .footer-menu, .footer-logo, .footer-contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .footer-contacts__text {
    margin-top: 32px;
  }

  .footer-links {
    display: flex;
    margin-right: 85px;
  }
</style>