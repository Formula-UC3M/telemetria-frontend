<template>
  <div class="page">
    <div class="page-header">
      <Header class="header-component" />
    </div>
    <div class="page-body">
      <Car class="car-component" />
    </div>
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
  .page {
    display: flex;
    flex-direction: column;
  }

    .page-body {
      align-content: center;
      display: flex;
      flex: 1;
    }

  .car-component {
    align-self: center;
    width: 70%;
  }

</style>
