<script setup lang="ts">
import { mockContacts } from "@/mock/contacts";

const { phone } = mockContacts;

</script>

<template>
  <div class="contacts__telephone">
    <div class="telephone"></div>
    <a class="contacts__link" :href='`tel:${phone.value}`' id="phone">{{ phone.label }}</a>
  </div>
</template>

<style scoped>
  .contacts__telephone {
    display: flex;
    align-items: flex-start;
    column-gap: 8px;
  }

.contacts__link {
  width: 134px;
}

.telephone {
  mask-image: url(../public/img/icons/telephone.svg);
  height: 16px;
  width: 16px;
  background-color: #029F59;
  display: block;
}

</style>