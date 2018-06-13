<template>
  <div class="pedals">
    <div class="pedal pedal--brake">
      <Icon-pedal class="pedal__icon" mode="brake" />
      <Ui-progress-bar orientation="vertical" :percentage="_brakePos" />
    </div>
    <div class="pedal pedal--throttle">
      <Icon-pedal class="pedal__icon" mode="gas" />
      <Ui-progress-bar orientation="vertical" :percentage="_throttlePos" />
    </div>
  </div>
</template>

<script>

  import {
    IconPedal
  } from '../icons/index';

  import {
    UiProgressBar
  } from '../ui/index';

  export default {
    name: 'IndicatorPedals',
    props: {
      brakeCurrent: {
        type: Number,
        default: 1
      },
      brakeMax: {
        type: Number,
        default: 120
      },
      throttleCurrent: {
        type: Number,
        default: 1
      },
      throttleMax: {
        type: Number,
        default: 120
      }
    },
    computed: {
      _brakePos() {
        return this.brakeCurrent * 100 / this.brakeMax;
      },
      _throttlePos() {
        return this.throttleCurrent * 100 / this.throttleMax;
      }
    },
    components: {
      IconPedal,
      UiProgressBar
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
