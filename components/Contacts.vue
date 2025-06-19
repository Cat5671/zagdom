<script setup lang="ts">
import { mockContacts } from "@/mock/contacts";

const { email, address } = mockContacts;

</script>

<template>
  <div class="contacts__list">

    <TelephoneContact/>

    <div class="contacts__email">
      <img src="../public/img/icons/email.svg" alt="email">
      <a :href='`mailto:${email}`'>{{ email }}</a>
    </div>

    <div class="contacts__address">
      <img src="../public/img/icons/address.svg" alt="address">
      <address v-html="address"></address>
    </div>

  </div>

</template>


<style scoped>
.contacts__list{
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}

.contacts__list * {
  display: flex;
  align-items: flex-start;
  column-gap: 8px;
}

</style>