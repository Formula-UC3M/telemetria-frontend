import Vue from 'vue'
import VueMqtt from 'vue-mqtt'

import App from './App.vue'
import router from './router'
import store from './store/index'
import { WS_URL } from './api/index'

Vue.use(VueMqtt, WS_URL, {})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  mounted () {
    this.$store.dispatch('fetchConfig')
    this.$store.dispatch('login', {
      email: 'test@telemetria.com',
      password: 'abc123..'
    })
    this.$mqtt.subscribe('formula-fake-data/+')
    this.$mqtt.subscribe('formula-fake-data/ecu/+')
  },
  render: h => h(App)
}).$mount('#app')
