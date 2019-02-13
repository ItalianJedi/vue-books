import Vue from 'vue'
import Router from 'vue-router'
//import CitySearch from '@/views/CitySearch'
import BookSearch from '@/views/BookSearch'
import CurrentWeather from '@/views/CurrentWeather'
import Forecast from '@/views/Forecast'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BookSearch',
      component: BookSearch
    },
    {
      path: '/:cityId/current',
      name: 'CurrentWeather',
      component: CurrentWeather
    },
    {
      path: '/:cityId/forecast',
      name: 'Forecast',
      component: Forecast
    }
  ]
})