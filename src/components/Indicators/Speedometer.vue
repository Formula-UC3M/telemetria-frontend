<template>
  <div class="speedometer">
    <div class="speedometer-label">
      <span class="speedometer-label__num">{{ current }}</span>
      <span class="speedometer-label__unit">KM/H</span>
    </div>
  </div>
</template>

<script>
import {
  IconSpeedometer
} from '../icons/index';

export default {
  name: 'IndicatorSpeedometer',
  props: ['current'],
  components: {
    IconSpeedometer
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .speedometer {
    display: flex;
    align-items: center;
  }
  .speedometer-label {
    font-size: 7rem;
    margin-left: 10px;
  }
    .speedometer-label__num,
    .speedometer-label__unit {
      font-family: 'Digit'
    }

    .speedometer-label__unit {
      font-size: 2rem;
    }
</style>
