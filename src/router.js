import Vue from 'vue'
import Router from 'vue-router'
//import CitySearch from '@/views/CitySearch'
import BookSearch from '@/views/BookSearch'
import CurrentWeather from '@/views/CurrentWeather'
import Forecast from '@/views/Forecast'
import AboutVuebooks from '@/components/AboutVuebooks'
import AboutMe from '@/components/AboutMe'
import VueWow from 'vue-wow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookSearch',
      component: BookSearch
    },
    /*{
      path: '/:CurrentWeather',
      name: 'About vue books',
      component: CurrentWeather
    },*/
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
    /*{
      path: '/:cityId/forecast',
      name: 'About Me',
      component: Forecast
    }*/
  ]
})