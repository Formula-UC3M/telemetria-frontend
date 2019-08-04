import Vue from 'vue';
import VueMqtt from 'vue-mqtt';

import App from './App.vue';
import router from './router';
import store from './store/index';
import { WS_URL } from './api/index';
import { 
  ROUTES_PREFIX, FAKE_DATA_ROUTES_PREFIX, SUBSCRIBERS
} from './utils/constants';

Vue.use(
  VueMqtt,
  WS_URL,
  {
    clean: false,
    clientId: 'frontend-listener-' + Math.random(),
    properties: {
      topicAliasMaximum: 10000
    }
  }
)

/* const email = prompt("Email");
const password = prompt("Pasword");

if (!email || !password) {
  alert('Email o contraseña no validos');
  window.location.href = '/';
} */

const email = 'test@telemetria.com';
const password = 'abc123..';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted () {
    this.$store.dispatch('fetchConfig')
    this.$store.dispatch('login', {
      email,
      password
    })

    SUBSCRIBERS.forEach(subscriber => {
      this.$mqtt.subscribe(ROUTES_PREFIX + subscriber);
      this.$mqtt.subscribe(FAKE_DATA_ROUTES_PREFIX + subscriber);
    });
  },
  render: h => h(App)
}).$mount('#app')
