<script setup lang="ts">
import cheap_construction_1x from '../images/news/cheap_consctruction.jpg'
import cheap_construction_2x from '../images/news/cheap_consctruction@2x.jpg'
import tractor_1x from '../images/news/tractor.jpg'
import tractor_2x from '../images/news/tractor@2x.jpg'
import cosiness_1x from '../images/news/cosiness.jpg'
import cosiness_2x from '../images/news/cosiness@2x.jpg'
import construction_1x from '../images/news/consctruction.jpg'
import construction_2x from '../images/news/consctruction@2x.jpg'

const news = [
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
]
</script>

<template>
  <ul>
    <li v-for="news in news">
      <CardNews
        :image="news.image"
        :date="news.date"
        :title="news.title"
        :description="news.description"
        />
    </li>
  </ul>
  
</template>

<style scoped>
  ul {
    display: flex;
    padding: 0;
    justify-content: space-between;
    column-gap: 16px;
    overflow-y: hidden;
    overflow-x: auto;
  }

  ul::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
</style>