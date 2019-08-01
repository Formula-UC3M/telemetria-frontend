<template>
  <div class="rpm rpm--horizontal">
    <div class="rpm-label">
      <span class="rpm-label__num">{{ current }}</span>
      <span class="rpm-label__unit"> RPM</span>
    </div>
    <div class="rpm-progress">
      <Ui-progress-bar :percentage="percentage" />
    </div>
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
      return {};
    },
    computed: {
      percentage() {
        return this.current !== 0 || this.max !== 0 ? (this.current * 100) / this.max : 0;
      }
    }
  };
</script>

<style lang="scss">
  .rpm {
    display: flex;
  }

  .rpm--horizontal {
    align-items: center;
    .rpm-label {
      width: 40%;
    }
    .rpm-progress {
      margin-left: 30px;
      flex: 1;
    }
  }

  .rpm-label {
    font-family: 'Digit';
    font-size: 2rem;
  }
</style>
