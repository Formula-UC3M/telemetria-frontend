<template>
  <div class="gear">
    <Icon-gear class="gear__icon" />
    <span class="gear__label">4</span>
  </div>
</template>

<script>
import {
  IconGear
} from '../icons/index';

export default {
  name: 'IndicatorGear',
  components: {
    IconGear
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .gear {
    align-items: center;
    display: flex;
    justify-content: center;
  }
    .gear__label {
      color: #0e0e0e;
      font-size: 2em;
    }
    .gear__icon {
      margin-right: 10px;
      height: 35px;
      width: 35px;
    }
</style>
