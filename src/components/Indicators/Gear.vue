<template>
  <div class="gear">
    <span>4</span>
    <Icon-gear />
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
    height: 50px;
    width: 50px;
  }
  .gear p {
    color: #0e0e0e;
    font-family: monospace;
    font-size: 2em;
    margin: 0;
  }
  .gear svg {
    margin-left: 10px;
    height: 50px;
    width: 50px;
  }
</style>
