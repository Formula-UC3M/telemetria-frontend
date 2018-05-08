<template>
     <div class="data-header">
        <section class="car-details">
          <Indicator-speedometer />
          <div class="car__gear">
            <Indicator-gear />
            <Indicator-clutch :active="clutchActive" />
          </div>

        </section>

        <section class="car-pedals">
          <Indicator-pedals />
        </section>

        <section class="car-rpm">
          <Indicator-rpm :max="maxRpm" :current="currentRpm" />
        </section>
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
  data: () => ({
    maxRpm: 12000,
    currentRpm: 8200,
    clutchActive: true
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.data-header {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 10px;
}
.car-details {
  border: 2px solid #d9d9d9;
  padding: 10px;
  width: 30%;
}

.car-pedals {
  width: 30%;
}

.car-rpm {
  width: 30%;
}

.car__gear {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

</style>
