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
  import { UiProgressBar } from '../ui/index';
  import { convertU8 } from '../../utils/tools';
  import {
    ROUTES_PREFIX,
    FAKE_DATA_ROUTES_PREFIX,
    ROUTES_BY_COMPONENT
  } from '../../utils/constants';

  export default {
    name: 'IndicatorRpm',
    components: {
      UiProgressBar
    },
    data() {
      return {
        current: 0
      };
    },
    computed: {
      percentage() {
        const { current } = this;
        const { max, min } = this.$store.state.config.sensors.ecu.rpm;
        return current !== min || max !== min ? (current * 100) / max : min;
      }
    },
    mqtt: {
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Rpm'] }`] (data) {
      this.current = convertU8(data);
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Rpm'] }`] (data) {
      this.current = convertU8(data);
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
