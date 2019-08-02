<template>
  <div class="page">
    <section class="page-header">
      <section class="car-speedometer">
        <Indicator-speedometer />
        <Indicator-rpm :max="maxRpm" :current="currentRpm" />
       </section>
        <section class="car-details">
          <Indicator-gear
            class="car-details__gear" />
        </section>

        <section class="car-pedals">
          <Indicator-pedals />
        </section>

        <section class="car-motor">
          <Element-info
            :icon="IconTemp"
            :data="waterTemp" />
          <Element-info
            :icon="IconEngine"
            :data="oilTemp" />
          <Element-info
            :icon="IconBattery"
            :data="batteryTemp" />
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
        <Indicator-upright />
      </div>
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
  IndicatorUpright
} from '../components/Indicators/index';

import { ElementInfo } from '../components/ui/index';

import {
  IconFan,
  IconBrake,
  IconSuspension,
  IconBattery,
  IconEngine,
  IconTemp
} from '../components/icons/index';

import { default as mockData } from './mocks/componentData';
import { mapState } from 'vuex'

export default {
  name: 'Mockup',
  components: {
    Car,
    ElementInfo,
    IndicatorSpeedometer,
    IndicatorGear,
    IndicatorRpm,
    IndicatorPedals,
    IndicatorUpright
  },
  data() {
    return {
      currentRpm: 0,
      waterTemp: [{value: '0 ºC'}],
      oilTemp: [{value: '0 ºC'}],
      batteryTemp: [{value: '0 ºC'}],
      mockData,
      IconBattery,
      IconEngine,
      IconTemp,
      IconFan,
      IconBrake,
      IconSuspension
    }
  },
  computed: {
    maxRpm() {
      return 15000;
    }
  },
  mqtt: {
    'fake/ecu/+' (data, route) {
      switch ( route ) {
        case 'fake/ecu/water_temp_eng':
          this.waterTemp = [{value: `${data[0]} ºC`}]
          break
        case 'fake/ecu/oil_temp_eng':
          this.oilTemp = [{value: `${data[0]} ºC`}]
          break
        case 'fake/ecu/rpm':
          this.currentRpm = data[0]
          break
      }
    },
    'data/ecu/+' (data, route) {
      switch ( route ) {
        case 'data/ecu/water_temp_eng':
          this.waterTemp = [{value: `${data[0]} ºC`}]
          break
        case 'data/ecu/oil_temp_eng':
          this.oilTemp = [{value: `${data[0]} ºC`}]
          break
        case 'data/ecu/rpm':
          this.currentRpm = data[0]
          break
      }
    },
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
