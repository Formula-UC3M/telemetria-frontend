<template>
  <div class="page">
    <Header />
    <Car />
  </div>
</template>

<script>

import {
  Car,
  Header,
} from '../components/index';

export default {
  name: 'Mockup',
  components: {
    Car,
    Header,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
}

.page {
  width: 100%;
}


</style>
