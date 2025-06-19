<script setup lang="ts">
import { mockContacts } from "@/mock/contacts";

const { email, address } = mockContacts;

</script>

<template>
  <div class="contacts__list">

    <TelephoneContact/>

    <div class="contacts__email">
      <div class="email"></div>
      <a :href='`mailto:${email}`'>{{ email }}</a>
    </div>

    <div class="contacts__address">
      <div class="address"></div>
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

.email {
  mask-image: url(../public/img/icons/email.svg);
}

.address {
  mask-image: url(../public/img/icons/address.svg);
}

.email, .address {
  height: 16px;
  width: 16px;
  background-color: #029F59;
  display: block;
}
</style>