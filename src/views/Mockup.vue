<template>
  <div class="page">
    <section class="page-background">
      <div class="page-background__back">
        <Car class="car-component" />
      </div>
      <div class="page-background__front"></div>
    </section>
    <section class="page-header">
      <section class="car-speedometer">
        <Indicator-speedometer />
          <Indicator-rpm/>
        </section>

        <section class="car-details">
          <Indicator-gear class="car-details__gear" />
        </section>

        <section class="car-pedals">
          <Indicator-pedals />
        </section>

        <section class="car-motor">
          <Indicator-water-temp />
          <Indicator-oil-temp />
        </section>
    </section>
    <section class="temperatures">
      <Indicator-radiator />
      <Indicator-brake-temp />
      <Indicator-upright />
      <Indicator-suspension />
    </section>
  </div>
</template>

<script>

import { Car } from '../components/index';
import {
  IndicatorSpeedometer,
  IndicatorGear,
  IndicatorRpm,
  IndicatorPedals,
  IndicatorUpright,
  IndicatorWaterTemp,
  IndicatorOilTemp,
  IndicatorRadiator,
  IndicatorBrakeTemp,
  IndicatorSuspension
} from '../components/Indicators/index';

export default {
  name: 'Mockup',
  components: {
    Car,
    IndicatorSpeedometer,
    IndicatorGear,
    IndicatorRpm,
    IndicatorPedals,
    IndicatorUpright,
    IndicatorWaterTemp,
    IndicatorOilTemp,
    IndicatorRadiator,
    IndicatorBrakeTemp,
    IndicatorSuspension
  },
  data() {
    return {}
  }
};
</script>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 10px;
    z-index: 1;
  }
  .car-details {
    background-color: #fff;
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
    
    &__gear {
      flex: 1;
      font-size: 5rem;
    }
  }

  .car-motor .element-info__icon {
    width: 35px;
  }

  section.temperatures {
    align-content: center;
    /* display: flex;
    flex-direction: column; */
    display: grid;
    grid-template-columns: 1fr 1fr;
    z-index: 1;

    &__info {
      align-self: center;
      margin: 0 50px;

      & > * + * {
        margin-top: 30px;
      }
    }
  }

  .page-background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
    &__back,
    &__front {
      position: absolute;
      width: 100%;
      height: 100%;  
    }

    &__back {
      align-self: center;
      z-index: -2;
    }

    &__front {
      background: #ffffffdb;
      z-index: -1;
    }
  }

</style>
