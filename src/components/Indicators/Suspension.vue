<template>
  <div class="suspensions">
    <Element-info
      :icon="IconSuspension"
      :title="title"
      :data="data"
      :info="info"
    />
  </div>
</template>

<script>
import { ElementInfo } from '../ui/index';
import { IconSuspension } from '../icons/index';
import { convertU8 } from '../../utils/tools';
import {
  ROUTES_PREFIX,
  FAKE_DATA_ROUTES_PREFIX,
  ROUTES_BY_COMPONENT
} from '../../utils/constants';

export default {
  name: 'IndicatorSuspension',
  components: {
    ElementInfo
  },
  data() {
    return {
      info: 'Suspension data',
      title: 'Suspension',
      IconSuspension,
      data: [
          {
          label: 'Front left',
          value: '-0'
        },
        {
          label: 'Front right',
          value: '-0'
        },
        {
          label: 'Back left',
          value: '-0'
        },
        {
          label: 'Back right',
          value: '-0'
        }
      ]
    };
  },
  mqtt: {
     [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Suspension-wfl'] }`] (data) {
      this.data[0].value = convertU8(data);
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Suspension-wfr'] }`] (data) {
      this.data[1].value = convertU8(data);
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Suspension-wbl'] }`] (data) {
      this.data[2].value = convertU8(data);
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Suspension-wbr'] }`] (data) {
      this.data[3].value = convertU8(data);
    },

    // Fake data routes
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Suspension-wfl'] }`] (data) {
      this.data[0].value = convertU8(data);
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Suspension-wfr'] }`] (data) {
      this.data[1].value = convertU8(data);
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Suspension-wbl'] }`] (data) {
      this.data[2].value = convertU8(data);
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Suspension-wbr'] }`] (data) {
      this.data[3].value = convertU8(data);
    },
  }
};
</script>

<style>
  .suspensions {
    background-color: #ffffffb0;
    padding: 10px;
    padding-top: 0;
    border: 1px solid #ddd;
  }
</style>