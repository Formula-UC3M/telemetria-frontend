<template>
  <div class="speedometer">
    <Icon-speedometer class="speedometer__icon" />
    <span class="speedometer__label"> 237 km/h</span>
  </div>
</template>

<script>
import {
  IconSpeedometer
} from '../icons/index';

export default {
  name: 'IndicatorSpeedometer',
  components: {
    IconSpeedometer
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
  .speedometer {
    display: flex;
    align-items: center;
  }
  .speedometer__label {
    font-size: 2rem;
    margin-left: 10px;
  }

  .speedometer__icon {
    height: 35px;
    width: 35px;
  }
</style>
