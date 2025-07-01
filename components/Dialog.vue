<script setup>
import {
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
} from 'reka-ui'
import FormDialog from "~/components/FormDialog.vue";

const prop = defineProps({
  open: Boolean,
});

const emit = defineEmits(['update:open', 'close']);
</script>

<template>
  <DialogRoot :open="open" @update:open="$emit('update:open', $event)">
    <DialogPortal>
      <DialogOverlay class="DialogOverlay"/>
      <DialogContent class="DialogContent">
        <div class="modal__form">
          <div class="modal__cross"></div>
          <DialogClose
            class="IconButton"
            aria-label="Close"
            @click="emit('close')"/>
        </div>
        <FormDialog/>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style scoped lang="scss">
@use '../assets/colors' as *;

* {
  margin: 0;
  padding: 0;
}

.DialogOverlay {
  position: fixed;
  z-index: 99;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.4);
}

.DialogContent {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  width: 448px;
  height: 603px;
  border-radius: 10px;
  background-color: $white;
}

.IconButton {
  display: block;
  right: 0;
  margin: 24px 24px 0px 0px;
  height: 32px;
  width: 32px;
  border-radius: 6px;
  position: absolute;
  opacity: 40%;
  background-color: $secondary;
  border: none;
}

.modal__cross {
  right: 0;
  mask-image: url('../public/img/icons/cross.svg');
  mask-repeat: no-repeat;
  mask-size: contain;
  height: 10.47px;
  width: 10.47px;
  margin: 34.75px 34.76px 10.78px;
  background-color: $secondary;
  position: absolute;
}

@media (max-width: 769px) {
  .DialogContent {
    width: 344px;
    height: 592px;
  }
}
</style>