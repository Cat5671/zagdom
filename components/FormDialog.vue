<script setup lang="js">

import { DialogTitle } from "reka-ui";

const masked = ref('');
const raw = ref('');
</script>

<template>
  <div class="DialogMainContent">
    <DialogTitle class="DialogTitle">Оставить заявку</DialogTitle>
    <form class="modal-content__form" action="">
      <input placeholder="Имя"
             type="text"
             name="name"
             required
             maxlength="20">
      <input type="tel"
             v-maska:raw.unmasked
             data-maska="+7-(###)-###-##-##"
             v-model="masked"
             placeholder="Телефон"
             required
      >
      <textarea id="message"
                placeholder="Сообщение"
                name="message"
                maxlength="360"
                required/>
      <div class="modal-content__btn">
        <Button type="submit"/>
      </div>
    </form>
    <p class="DialogMainContent__text">Нажимая на кнопку «Отправить», вы<br> принимаете <span>пользовательское соглашение</span><br>
      и <span>политику конфиденциальности</span></p>
  </div>
</template>

<style scoped lang="scss">
@use '../assets/colors' as *;

.DialogMainContent {
  margin: 48px 48px 47px;
  display: flex;
  flex-direction: column;
}

p {
  color: #757E8D;
  line-height: 150%;
  margin-top: 8px;
}

p span {
  color: $secondary;
}

.modal-content__form {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

input {
  height: 25px;
  border-radius: 5px;
  border: none;
}
.DialogTitle {
  padding: 0;
  margin: 0 0 24px;
}

.modal-content__btn {
  margin-top: 8px;
  text-align: center;
}

#message {
  height: 67px;
  resize: none;
  border: none;
  border-radius: 5px;
  padding: 16.5px 16.5px;
}

@media (max-width: 769px) {
  .DialogMainContent {
    margin: 64px 17px 32px 17px;
  }

  .DialogTitle, .modal-content__form {
    margin-right: 7px;
    margin-left: 7px;
  }

}

.DialogMainContent__text {
  margin-top: 16px;
  text-align: center;
}
</style>