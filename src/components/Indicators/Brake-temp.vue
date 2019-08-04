<template>
  <div class="brakes">
    <Element-info
      :icon="IconBrake"
      :title="title"
      :data="data"
      :info="info"
    />
  </div>
</template>

<script>
import { ElementInfo } from '../ui/index';
import { IconBrake } from '../icons/index';
import { convertU8 } from '../../utils/tools';
import {
  ROUTES_PREFIX,
  FAKE_DATA_ROUTES_PREFIX,
  ROUTES_BY_COMPONENT
} from '../../utils/constants';

export default {
  name: 'IndicatorBrakeTemp',
  components: {
    ElementInfo
  },
  data() {
    return {
      info: 'Brakes temp',
      title: 'Brakes',
      IconBrake,
      data: [
        {
          label: 'Front left',
          value: '-0 ºC'
        },
        {
          label: 'Front right',
          value: '-0 ºC'
        },
        {
          label: 'Back left',
          value: '-0 ºC'
        },
        {
          label: 'Back right',
          value: '-0 ºC'
        }
      ]
    };
  },
  mqtt: {
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Brake-temp-wfl'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Brake-temp-wfr'] }`] (data) {
      this.data[1].value = `${ convertU8(data) } ºC`;
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Brake-temp-wbl'] }`] (data) {
      this.data[2].value = `${ convertU8(data) } ºC`;
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Brake-temp-wbr'] }`] (data) {
      this.data[3].value = `${ convertU8(data) } ºC`;
    },

    // Fake data routes
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Brake-temp-wfl'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Brake-temp-wfr'] }`] (data) {
      this.data[1].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Brake-temp-wbl'] }`] (data) {
      this.data[2].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Brake-temp-wbr'] }`] (data) {
      this.data[3].value = `${ convertU8(data) } ºC`;
    },
  }
};
</script>

<style>
  .brakes {
    background-color: #ffffffb0;
    padding: 10px;
    padding-top: 0;
    border: 1px solid #ddd;
  }
</style>
