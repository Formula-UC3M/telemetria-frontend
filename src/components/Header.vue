<template>
     <div class="data-header">
        <section class="speed-gear-clutch">
          <Indicator-speedometer />
          <div class="gear-clutch">
            <Indicator-gear />
            <Indicator-clutch />
          </div>

        </section>

        <section class="">
          <Indicator-pedals />
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
  IndicatorPedals,
} from '../components/Indicators/index';

export default {
  name: 'Header',
  components: {
    IndicatorSpeedometer,
    IndicatorGear,
    IndicatorRpm,
    IndicatorClutch,
    IndicatorPedals,
  },
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.data-header {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px;
  width: 100%;
}
.speed-gear-clutch {
  border: 2px solid #d9d9d9;
  padding: 10px;
}
.gear-clutch {
  align-items: flex-end;
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  width: 100%;
}

</style>
