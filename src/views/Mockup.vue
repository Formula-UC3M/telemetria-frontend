<template>
  <div class="page">
    <section class="page-header">
      <section class="car-speedometer">
        <Indicator-speedometer />
        <Indicator-rpm
          :max="maxRpm"
          :current="currentRpm" />
       </section>
        <section class="car-details">
          <Indicator-gear
            class="car-details__gear" />
          <Indicator-clutch
            class="car-details__clutch"
            :active="clutchActive" />
        </section>

        <section class="car-pedals">
          <Indicator-pedals />
        </section>

        <section class="car-motor">
          <Element-info
            :icon="IconTemp"
            :data="mockData.water.data" />
          <Element-info
            :icon="IconEngine"
            :data="mockData.engine.data" />
          <Element-info
            :icon="IconBattery"
            :data="mockData.battery.data" />
        </section>
    </section>
    <section class="page-body">
      <div class="page-body__car">
        <Car class="car-component" />
      </div>
      <div class="page-body__info">
        <Element-info
          :icon="IconFan"
          :title="mockData.radiator1.title"
          :data="mockData.radiator1.data" />

        <Element-info
          :icon="IconFan"
          :title="mockData.radiator2.title"
          :data="mockData.radiator2.data" />
      </div>
    </section>

    <section class="page-footer">
      <div class="wheels">
         <Element-info
          :icon="IconBrake"
          :title="mockData.brakes.title"
          :data="mockData.brakes.data" />
      </div>
      <div class="uprights">
        <Element-info
          :icon="IconSuspension"
          :title="mockData.uprights.title"
          :data="mockData.uprights.data" />
      </div>
    </section>
  </div>
</template>

<script>

import {
  Car
} from '../components/index';

import {
  IndicatorGear,
  IndicatorRpm,
  IndicatorPedals,
} from '../components/Indicators/index';

import {
  IndicatorClutchMqtt,
  IndicatorSpeedometerMqtt,
} from '../feature/sensors/index';

import {
  ElementInfo
} from '../components/ui/index';

import {
  IconFan,
  IconBrake,
  IconSuspension,
  IconBattery,
  IconEngine,
  IconTemp
} from '../components/icons/index';

import { default as mockData } from './mocks/componentData';

export default {
  name: 'Mockup',
  components: {
    Car,
    ElementInfo,
    IndicatorGear,
    IndicatorRpm,
    IndicatorPedals,
    'Indicator-speedometer': IndicatorSpeedometerMqtt,
    'Indicator-clutch': IndicatorClutchMqtt
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      maxRpm: 12000,
      currentRpm: 8200,
      clutchActive: false,
      mockData,
      IconBattery,
      IconEngine,
      IconTemp,
      IconFan,
      IconBrake,
      IconSuspension
    }
  },
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

  .car-motor .element-info__icon {
      width: 35px;
  }

    .page-body {
      align-content: center;
      display: flex;
      flex-direction: row;
      flex: 1;
    }

  .page-body__car {
    align-self: center;
    width: 100%;
  }

  .page-body__info {
    align-self: center;
    margin: 0 50px;

    & > * + * {
      margin-top: 30px;
    }
  }

  .page-footer {
    display: flex;
    padding: 50px;
    & > * + * {
      margin-left: 50px;
    }
  }

</style>
