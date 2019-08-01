<template>
  <div class="pedals">
    <div class="pedal pedal--brake">
      <Icon-pedal class="pedal__icon" mode="brake" />
      <Ui-progress-bar orientation="vertical" :percentage="brake" />
    </div>
    <div class="pedal pedal--throttle">
      <Icon-pedal class="pedal__icon" mode="gas" />
      <Ui-progress-bar orientation="vertical" :percentage="throttle" />
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
    components: {
      IconPedal,
      UiProgressBar
    },
    data() {
      return {
        msg: 'Here Stub data',
        brake: 30,
        throttle: 40
      };
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
