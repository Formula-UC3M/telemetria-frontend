<template>
  <div class="rpm rpm--horizontal">
    <div class="rpm-label">
      <span class="rpm-label__num">{{ rpmCurrent }}</span>
      <span class="rpm-label__unit"> RPM</span>
    </div>
    <div class="rpm-progress">
      <Ui-progress-bar :percentage="_rpmPos" />
    </div>
  </div>
</template>

<script>
  import {
    UiProgressBar
  } from '../ui/index';

  export default {
    name: 'IndicatorRpm',
    props: {
      rpmMax: {
        type: Number,
        default: 12000
      },
      rpmCurrent: Number
    },
    computed: {
      _rpmPos() {
        return this.rpmCurrent * 100 / this.rpmMax;
      }
    },
    components: {
      UiProgressBar
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
