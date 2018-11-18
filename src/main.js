import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import { API_URL, WS_URL } from './api/index'

import VueMqtt from 'vue-mqtt'
// alert(API_URL)
Vue.use(VueMqtt, WS_URL, {})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    // alert('mounted')
    this.$store.dispatch('fetchConfig')
    this.$store.dispatch('login', {
      email: '1234@gmail.com',
      password: '1234'
    })
    this.$mqtt.subscribe('formula-fake-data/+')
  },
  render: h => h(App)
}).$mount('#app')
