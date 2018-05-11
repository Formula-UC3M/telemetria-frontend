<template>
  <div class="rpm">
    <div class="rpm-label">
      <span class="rpm-label__num">{{ current }}</span>
      <span class="rpm-label__unit">rpm</span>
    </div>
    <Ui-progress-bar :percentage="percentage" />
  </div>
</template>

<script>
  import {
    UiProgressBar
  } from '../ui/index';

  export default {
    name: 'IndicatorRpm',
    components: {
      UiProgressBar
    },
    props: {
      max: {
        type: Number,
        default: 0
      },
      current: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        msg: 'Mensaje de RPM faster and furious!!!'
      };
    },
    computed: {
      percentage() {
        return this.current !== 0 || this.max !== 0 ? (this.current * 100) / this.max : 0;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .rpm__label {
    color: red;
  }
</style>
