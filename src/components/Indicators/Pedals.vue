<template>
  <div class="pedals">
    <div class="pedal pedal--brake">
      <Icon-pedal class="pedal__icon" mode="brake" />
      <Ui-progress-bar orientation="vertical" :percentage="brakePercentage" />
    </div>
    <div class="pedal pedal--throttle">
      <Icon-pedal class="pedal__icon" mode="gas" />
      <Ui-progress-bar orientation="vertical" :percentage="throttlePercentage" />
    </div>
  </div>
</template>

<script>

  import { IconPedal } from '../icons/index';
  import { UiProgressBar } from '../ui/index';
  import { convertU8 } from '../../utils/tools';
  import {
    ROUTES_PREFIX,
    FAKE_DATA_ROUTES_PREFIX,
    ROUTES_BY_COMPONENT
  } from '../../utils/constants';

  export default {
    name: 'IndicatorPedals',
    components: {
      IconPedal,
      UiProgressBar
    },
    data() {
      return {
        brake: 0,
        throttle: 0
      };
    },
    computed: {
      brakePercentage() {
        const { brake } = this;
        let { max, min } = this.$store.state.config.sensors.brakePosition;

        if (max === null) {
          max = 100;
          console.warn('Max Brake position not configured');
        }

        if (min === null) {
          min = 0;
          console.warn('Min Brake position not configured');
        }

        return brake !== min || max !== min ? (brake * 100) / max : min;
      },
      throttlePercentage() {
        const { throttle } = this;
        let { max, min } = this.$store.state.config.sensors.throttlePosition;

        if (max === null) {
          max = 100;
          console.warn('Max Throttle position not configured');
        }

        if (min === null) {
          min = 0;
          console.warn('Min Throttle position not configured');
        }

        return throttle !== min || max !== min ? (throttle * 100) / max : min;
      }
    },
    mqtt: {
      [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Pedals-throttle'] }`] (data) {
        this.throttle = convertU8(data);
      },
      [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Pedals-throttle'] }`] (data) {
        this.throttle = convertU8(data);
      },
      [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Pedals-brake'] }`] (data) {
        this.brake = convertU8(data);
      },
      [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Pedals-brake'] }`] (data) {
        this.brake = convertU8(data);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .pedals {
    display: flex;
  }

  .pedal {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
  }

  .pedal + .pedal {
    margin-left: 10px;
  }

  .pedal__icon {
    flex: 0 0 35%;
    margin-top: 10px;
    width: 35px;
  }
</style>
