<template>
     <div class="data-Header">
        <section class="speed-gear-clutch">
          <Indicator-speedometer />
          <Indicator-gear />
          <Indicator-clutch />
        </section>

        <section class="pedals">
          <div class="pedal throttle">
            <div class="empty" style="height: 10%"></div>
          </div>
          <div class="pedal brake">
            <div class="empty" style="height: 60%"></div>
          </div>
        </section>

        <Indicator-rpm />
    </div>
</template>

<script>
import {
  IndicatorSpeedometer,
  IndicatorGear,
  IndicatorRpm,
  IndicatorClutch,
} from '../components/Indicators/index';

export default {
  name: 'Header',
  components: {
    IndicatorSpeedometer,
    IndicatorGear,
    IndicatorRpm,
    IndicatorClutch,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
