<template>
  <div class="radiator">
    <Element-info
      :icon="IconFan"
      :title="title"
      :data="data"
    />
  </div>
</template>


<script>
import { ElementInfo } from '../ui/index';
import { IconFan } from '../icons/index';
import { convertU8 } from '../../utils/tools';
import {
  ROUTES_PREFIX,
  FAKE_DATA_ROUTES_PREFIX,
  ROUTES_BY_COMPONENT
} from '../../utils/constants';

export default {
  name: 'IndicatorRadiator',
  components: {
    ElementInfo
  },
  data() {
    return {
      info: 'Radiator temperature for sensors in | out | middle | t',
      IconFan,
      title: 'Radiator Temp',
      data: [
        {
          label: 'Sensor In',
          value: '-0 ºC'
        },
        {
          label: 'Sensor Out',
          value: '-0 ºC'
        },
        {
          label: 'Sensor Middle',
          value: '-0 ºC'
        },
        {
          label: 'Sensor T',
          value: '-0 ºC'
        }
      ]
    };
  },
  mqtt: {
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Radiator-in'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Radiator-out'] }`] (data) {
      this.data[1].value = `${ convertU8(data) } ºC`;
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Radiator-middle'] }`] (data) {
      this.data[2].value = `${ convertU8(data) } ºC`;
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Radiator-t'] }`] (data) {
      this.data[3].value = `${ convertU8(data) } ºC`;
    },

    // Fake data listeners
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Radiator-in'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Radiator-out'] }`] (data) {
      this.data[1].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Radiator-middle'] }`] (data) {
      this.data[2].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Radiator-t'] }`] (data) {
      this.data[3].value = `${ convertU8(data) } ºC`;
    },
  }
};
</script>

<style>
  .radiator {
    background-color: #ffffffb0;
    padding: 10px;
    padding-top: 0;
    border: 1px solid #ddd;
  }
</style>
