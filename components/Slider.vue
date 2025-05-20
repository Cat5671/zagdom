<script setup>
import slide1_portrait_1x from '../images/slide-1-portrait.jpg'
import slide1_portrait_2x from '../images/slide-1-portrait@2x.jpg'
import slide1_landscape_1x from '../images/slide-1-landscape.jpg'
import slide1_landscape_2x from '../images/slide-1-landscape@2x.jpg'
import slide2_portrait_1x from '../images/slide-2-portrait.jpg'
import slide2_portrait_2x from '../images/slide-2-portrait@2x.jpg'
import slide2_landscape_1x from '../images/slide-2-landscape.jpg'
import slide2_landscape_2x from '../images/slide-2-landscape@2x.jpg'
import slide3_portrait_1x from '../images/slide-3-portrait.jpg'
import slide3_portrait_2x from '../images/slide-3-portrait@2x.jpg'
import slide3_landscape_1x from '../images/slide-3-landscape.jpg'
import slide3_landscape_2x from '../images/slide-3-landscape@2x.jpg'

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

  let counter = 0;
  let touchStartX = 0;

  function changeSlide(prevIndex, currentIndex) {
    document.querySelectorAll('.slide')[prevIndex].style.display = 'none';
    document.querySelectorAll('.slide')[currentIndex].style.display = 'block';
    document.querySelectorAll('.pagination-circle')[prevIndex].classList.remove('active');
    document.querySelectorAll('.pagination-circle')[currentIndex].classList.add('active');
  }

  const moveRight = function () {
    if (counter === 0 || counter === 1) {
      counter++;
      changeSlide(counter - 1, counter);
    }
  }

  const moveLeft = function () {
    if (counter === 1 || counter === 2) {
      counter--;
      changeSlide(counter + 1, counter);
    }
  }

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    let touchEndX = event.changedTouches[0].clientX;
    let touchDiff = touchStartX - touchEndX;

    if (touchDiff > 50) {
      moveRight();
    }
    else if (touchDiff < -50) {
      moveLeft();
    }
  };


</script>

<template>
  <div class="slider" @touchstart="handleTouchStart"
       @touchend="handleTouchEnd">
    <button class="slider__button arrow-left" @click="moveLeft"></button>
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
          <h3>{{slide.title}}</h3>
          <p id="text">{{slide.text}}</p>
        </figcaption>
      </figure>
    </div>
    <div class="slider__pagination">
      <div class="pagination-circle active"></div>
      <div class="pagination-circle"></div>
      <div class="pagination-circle"></div>
    </div>
    <button class="slider__button arrow-right" @click="moveRight"></button>
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
    width: 48px;
    height: 48px;
    position: absolute;
    z-index: 6;
    padding: 0;
    margin: 0px 16px;
    background-image: url("../public/img/icons/arrow.svg");
    background-repeat: no-repeat;
    background-position: center;
  }

  .arrow-right {
    right: 0;
  }

  .arrow-left {
    left: 0;
    transform: scale(-1);
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

  .pagination-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    figcaption {
      padding-inline: 24px;
      padding-bottom: 30px;
    }

    button, .pagination-circle {
      display: none;
    }
  }

</style>