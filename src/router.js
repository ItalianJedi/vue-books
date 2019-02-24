import Vue from 'vue'
import Router from 'vue-router'
import BookSearch from '@/views/BookSearch'
import AboutVuebooks from '@/components/AboutVuebooks'
import AboutMe from '@/components/AboutMe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookSearch',
      component: BookSearch
    },
    {
      path: '/AboutVuebooks',
      name: 'AboutVuebooks',
      component: AboutVuebooks
    },
    {
      path: '/AboutMe',
      name: 'AboutMe',
      component: AboutMe
    },
  ]
})