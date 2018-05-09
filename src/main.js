import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import VueMqtt from 'vue-mqtt';
Vue.use(VueMqtt, 'http://localhost:3001', {});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mqtt: {
    'formula/+' (data, topic) {
      console.log(data.toString(), topic);
    }
  },
  mounted() {
    // this.$mqtt.subscribe('formula/#');
  },
  render: h => h(App),
}).$mount('#app');
