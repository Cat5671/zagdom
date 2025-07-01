<script setup>
import cheap_construction_1x from '../images/news/cheap_consctruction.jpg'
import cheap_construction_2x from '../images/news/cheap_consctruction@2x.jpg'
import tractor_1x from '../images/news/tractor.jpg'
import tractor_2x from '../images/news/tractor@2x.jpg'
import cosiness_1x from '../images/news/cosiness.jpg'
import cosiness_2x from '../images/news/cosiness@2x.jpg'
import construction_1x from '../images/news/consctruction.jpg'
import construction_2x from '../images/news/consctruction@2x.jpg'

import BreadCrumbs from "~/components/BreadCrumbs.vue";

import { ref, computed } from 'vue';

const news = ref([
      {
        image: {
          x1: cheap_construction_1x,
          x2: cheap_construction_2x,
        },
        date: '20 авг 2021',
        title: 'Как сделать строительство дешевле?',
        description: 'Строительство дома можно сделать дешевле — выбрав проект...'
      },

      {
        image: {
          x1: tractor_1x,
          x2: tractor_2x,
        },
        date: '20 авг 2021',
        title: 'Почему Гуд Вилл строит \n' +
            'лучшие дома?',
        description: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...'
      },

      {
        image: {
          x1: cosiness_1x,
          x2: cosiness_2x,
        },
        date: '20 авг 2021',
        title: 'Преимущества и недостатки частного дома',
        description: 'Первое и главное: строим дом индивидуально для вас, по вашим...'
      },

      {
        image: {
          x1: construction_1x,
          x2: construction_2x,
        },
        date: '20 авг 2021',
        title: 'Из чего мы строим дома в ипотеку?',
        description: 'Самый популярный вопрос наших клиентов касается материалов, которы...'
      },

      {
        image: {
          x1: construction_1x,
          x2: construction_2x,
        },
        date: '20 авг 2021',
        title: 'Из чего мы строим дома в ипотеку?',
        description: 'Самый популярный вопрос наших клиентов касается материалов, которы...',
      },

      {
        image: {
          x1: cheap_construction_1x,
          x2: cheap_construction_2x,
        },
        date: '20 авг 2021',
        title: 'Как сделать строительство дешевле?',
        description: 'Строительство дома можно сделать дешевле — выбрав проект...'
      },

      {
        image: {
          x1: tractor_1x,
          x2: tractor_2x,
        },
        date: '20 авг 2021',
        title: 'Почему Гуд Вилл строит \n' +
            'лучшие дома?',
        description: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...'
      },

      {
        image: {
          x1: cosiness_1x,
          x2: cosiness_2x,
        },
        date: '20 авг 2021',
        title: 'Преимущества и недостатки частного дома',
        description: 'Первое и главное: строим дом индивидуально для вас, по вашим...',
      },

      {
        image: {
          x1: tractor_1x,
          x2: tractor_2x,
        },
        date: '20 авг 2021',
        title: 'Почему Гуд Вилл строит \n' +
            'лучшие дома?',
        description: 'Хотим обрадовать тех, кто планирует переезд из квартиры в дом...',
      },
      {
        image: {
          x1: construction_1x,
          x2: construction_2x,
        },
        date: '20 авг 2021',
        title: 'Из чего мы строим дома в ипотеку?',
        description: 'Самый популярный вопрос наших клиентов касается материалов, которы...',
      },
      {
        image: {
          x1: cosiness_1x,
          x2: cosiness_2x,
        },
        date: '20 авг 2021',
        title: 'Преимущества и недостатки частного дома',
        description: 'Первое и главное: строим дом индивидуально для вас, по вашим...',
      },
      {
        image: {
          x1: cheap_construction_1x,
          x2: cheap_construction_2x,
        },
        date: '20 авг 2021',
        title: 'Как сделать строительство дешевле?',
        description: 'Строительство дома можно сделать дешевле — выбрав проект...'
      },
  {
    image: {
      x1: cheap_construction_1x,
      x2: cheap_construction_2x,
    },
    date: '20 авг 2021',
    title: 'Как сделать строительство дешевле?',
    description: 'Строительство дома можно сделать дешевле — выбрав проект...'
  },
]);

const currentPage = ref(1);
const pageSize = 12;

const totalPages = computed(() => {
  return Math.ceil(news.value.length / pageSize);
});

function addButtonClass(button) {
  document.querySelector(button).classList.add('disabled');
}

function removeButtonClass(button) {
  document.querySelector(button).classList.remove('disabled');
}

const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return news.value.slice(startIndex, endIndex);
});

const pageNumbers = computed(() => {
  const pages = [];
  for (let i = 1; i <= totalPages.value; i++) {
    pages.push(i);
  }
  return pages;
});

const goToPage = (page) => {

  document.querySelector('.active-button').classList.remove('active-button');

  if(page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    document.getElementById(page).classList.add('active-button');
  }

  if (page === 1) {
    removeButtonClass('.arrow-btn:last-child');
    addButtonClass('.arrow-btn:first-child');
  }

  else if (page === totalPages.value) {
    removeButtonClass('.arrow-btn:first-child');
    addButtonClass('.arrow-btn:last-child');
  }

  else {
    removeButtonClass('.disabled');
  }
};
</script>

<template>
  <section class="news__section news-page">
    <BreadCrumbs currentPage="Новости" />

    <h1 class="news-page__header">Новости</h1>

    <div class="news-page__cards">
      <ul>
        <li v-for="newsItem in paginatedNews">
          <CardNews
              :image="newsItem.image"
              :date="newsItem.date"
              :title="newsItem.title"
              :description="newsItem.description"
          />
        </li>
      </ul>
    </div>

    <div class="news-page__buttons buttons">
      <ArrowButton
          class="arrow-btn disabled"
          @click="goToPage(currentPage - 1)"
      />

      <div class="buttons__num">
        <button
            v-for="pageNumber in pageNumbers"
            :key="pageNumber"
            :id="pageNumber"
            :class=" {'active-button': pageNumber === 1} "
            @click="goToPage(pageNumber)"
            >
          {{ pageNumber }}
        </button>
      </div>

      <ArrowButton
          class="arrow-btn"
          @click="goToPage(currentPage + 1)"
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
  @use '../assets/mixins' as *;

  h4 {
    padding: 0;
    margin: 0px 0px 48px 0px;
  }

  h1 {
    color: black;
    margin: 0;
    padding-bottom: 16px;
  }

  .news__section {
    padding-bottom: 19px;
  }

  .news-page__buttons {
    display: flex;
    column-gap: 24px;
    justify-content: center;
  }

  .news-page__buttons div {
    display: flex;
    column-gap: 8px;
  }

  .news-page__cards {
    padding-bottom: 24px;
  }

  @media (max-width: 769px) {
    .news-page__buttons {
      padding-bottom: 16px;
    }

    h4 {
      margin: 0px 0px 32px 0px;
    }

    .news__section {
      padding-top: 8px;
    }

    .news-page__buttons div button:nth-child(even) {
      display: none;
    }

    h1 {
      font-size: 32px;
    }
  }

  button:first-child {
    transform: scale(-1);
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    row-gap: 32px;
    justify-content: space-evenly;
  }

  button {
    height: 46px;
    width: 46px;
    border-radius: 10px;
  }
</style>