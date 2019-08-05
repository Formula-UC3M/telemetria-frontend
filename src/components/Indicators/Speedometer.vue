<template>
  <div class="speedometer">
    <div class="speedometer-label">
      <span class="speedometer-label__num">{{speed}}</span>
      <span class="speedometer-label__unit">KM/H</span>
    </div>
    <div class="speedometer-icon"><IconSpeedometer /></div>
  </div>
</template>

<script>
import {
  IconSpeedometer
} from '../icons/index';

import {
  convertU8
} from '../../utils/tools';

import {
  ROUTES_PREFIX,
  FAKE_DATA_ROUTES_PREFIX,
  ROUTES_BY_COMPONENT
} from '../../utils/constants';

export default {
  name: 'IndicatorSpeedometer',
  components: {
    IconSpeedometer
  },
  data() {
    return {
      msg: 'Speed Value',
      speed: 0
    };
  },
  mqtt: {
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT.Speedometer }`] (data) {
      this.speed = convertU8(data);
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT.Speedometer }`] (data) {
      this.speed = convertU8(data);
    },
  },
  mounted () {}
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

    .speedometer-icon {
      position: relative;
      top: -25px;
      left: -29px;
      width: 29px;
    }
</style>
