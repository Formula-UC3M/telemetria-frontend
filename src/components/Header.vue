<template>
     <div class="data-header">
       <section class="car-speedometer">
         <indicator-speedometer />
         <Indicator-rpm :max="maxRpm" :current="currentRpm" />
       </section>
        <section class="car-details">
          <Indicator-gear class="car-details__gear" />
          <Indicator-clutch class="car-details__clutch" :active="clutchActive" />
        </section>

        <section class="car-pedals">
          <Indicator-pedals />
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
    display: flex;
    flex: 1;
  }

  .car-speedometer {
    flex: 1;
  }

  .car-details {
    display:flex;
    margin: 0 10%;
    width: 150px;
  }

    .car-details__gear {
      flex: 1;
      font-size: 5rem;
    }

</style>
