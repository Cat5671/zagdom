<script setup>
import slide1_portrait_1x from '../images/slider/slide-1-portrait.jpg'
import slide1_portrait_2x from '../images/slider/slide-1-portrait@2x.jpg'
import slide1_landscape_1x from '../images/slider/slide-1-landscape.jpg'
import slide1_landscape_2x from '../images/slider/slide-1-landscape@2x.jpg'
import slide2_portrait_1x from '../images/slider/slide-2-portrait.jpg'
import slide2_portrait_2x from '../images/slider/slide-2-portrait@2x.jpg'
import slide2_landscape_1x from '../images/slider/slide-2-landscape.jpg'
import slide2_landscape_2x from '../images/slider/slide-2-landscape@2x.jpg'
import slide3_portrait_1x from '../images/slider/slide-3-portrait.jpg'
import slide3_portrait_2x from '../images/slider/slide-3-portrait@2x.jpg'
import slide3_landscape_1x from '../images/slider/slide-3-landscape.jpg'
import slide3_landscape_2x from '../images/slider/slide-3-landscape@2x.jpg'


import { ref } from "vue";
import PaginationCircle from "~/components/PaginationCircle.vue";


const slides = [
    {
      image_portrait: {
        x1: slide1_portrait_1x,
        x2: slide1_portrait_2x,
      },
      image_landscape: {
        x1: slide1_landscape_1x,
        x2: slide1_landscape_2x,
      },
      title: 'Проектируем и строим загородные дома',
      text: 'Строим дома «под ключ»: от этапа проектирования и до финишной отделки помещений',
    },

    {
      image_portrait: {
        x1: slide2_portrait_1x,
        x2: slide2_portrait_2x,
      },
      image_landscape: {
        x1: slide2_landscape_1x,
        x2: slide2_landscape_2x,
      },
      title: 'Дизайн-проект бесплатно',
      text: 'Для территорий до 300м²'
    },

    {
      image_portrait: {
        x1: slide3_portrait_1x,
        x2: slide3_portrait_2x,
      },
      image_landscape: {
        x1: slide3_landscape_1x,
        x2: slide3_landscape_2x,
      },

      title: 'Работаем уже 10 лет',
      text: ''
    }
  ]

  const counter = ref(0);
  const touchStartX = ref(0);
  const touchEndX = ref(0);
  const touchDiff = ref(0);

  function changeSlide(prevIndex, currentIndex) {
    document.querySelectorAll('.slide')[prevIndex].style.display = 'none';
    document.querySelectorAll('.slide')[currentIndex].style.display = 'block';
    document.querySelectorAll('.pagination-circle')[prevIndex].classList.remove('active');
    document.querySelectorAll('.pagination-circle')[currentIndex].classList.add('active');
  }

  function removeButtonClass(sliderButton, arrow) {
    document.querySelector(sliderButton).classList.remove('disabled');
  }

  function addButtonClass(sliderButton, arrow) {
    document.querySelector(sliderButton).classList.add('disabled');
  }

  const moveRight = function () {
    if (counter.value === 0 || counter.value === 1) {
      counter.value++;
      changeSlide(counter.value - 1, counter.value);
      removeButtonClass('.button-left', 'button div:first-child');
    }
    if (counter.value === 2) {
      addButtonClass('.button-right', '.button-right div:last-child');
    }
  }

  const moveLeft = function () {
    if (counter.value === 1 || counter.value === 2) {
      counter.value--;
      changeSlide(counter.value + 1, counter.value);
      removeButtonClass('.button-right', '.button-right div:last-child');
    }
    if (counter.value === 0) {
      addButtonClass('.button-left', 'button div:first-child');
    }
  }

  const handleTouchStart = (event) => {
    touchStartX.value = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndX.value = event.changedTouches[0].clientX;
    touchDiff.value = touchStartX.value - touchEndX.value;

    if (touchDiff.value > 50) {
      moveRight();
    }
    else if (touchDiff.value < -50) {
      moveLeft();
    }
  };


</script>

<template>
  <div class="slider" @touchstart="handleTouchStart"
       @touchend="handleTouchEnd">
    <ArrowButton class="button-left disabled" @click="moveLeft"/>
    <div class="slider__slide">
      <figure v-for='slide in slides' class="slide">
        <picture>
          <source
              :srcset='`${slide.image_landscape.x2} 2x, ${slide.image_landscape.x1}`'
              media='(min-width: 530px)'
          >
          <source
              :srcset='`${slide.image_portrait.x2} 2x, ${slide.image_portrait.x1}`'
          >
          <img :src='slide.image_portrait.x1' :alt='slide.title' />
        </picture>
        <figcaption>
          <h1>{{slide.title}}</h1>
          <p id="text">{{slide.text}}</p>
        </figcaption>
      </figure>
    </div>
    <div class="slider__pagination">
      <PaginationCircle class="active"/>
      <PaginationCircle/>
      <PaginationCircle/>
    </div>
    <ArrowButton class="button-right"  @click="moveRight"/>
  </div>
</template>

<style scoped>

  img {
    max-width: 100%;
    object-fit: cover;
    border-radius: 30px;
    max-height: 450px;
    height: 100%;
    min-height: 391px;
  }

  .slider {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  figure {
    display: none;
    position: relative;
    margin: 0;
    height: 450px;
  }

  figure:first-child {
    display: block;
  }

  figcaption {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    padding-inline: 144px;
    padding-bottom: 113px;
  }

  p {
    margin: 0;
    color: white;
  }

  button {
    position: absolute;
    z-index: 6;
    margin: 0px 16px;
  }

  button:first-child {
    left: 0;
    transform: scale(-1);
  }

  button:last-child {
    right: 0;
  }

  .slider__slide {
    display: flex;
  }

  .slider__pagination {
    margin-bottom: 40px;
    bottom: 0;
    z-index: 6;
    position: absolute;
    display: flex;
    column-gap: 16px;
  }


  @media (max-width: 769px) {
    figcaption {
      padding-inline: 24px;
      padding-bottom: 30px;
    }

    button {
      display: none;
    }
  }

</style>