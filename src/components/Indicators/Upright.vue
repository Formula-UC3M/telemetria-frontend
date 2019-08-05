<template>
  <div class="uprights">
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
  name: 'IndicatorUpright',
  components: {
    ElementInfo
  },
  data() {
    return {
      info: 'Datos de Mangueta',
      title: 'Uprights',
      IconSuspension,
      data: [
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
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Upright-wbr'] }`] (data) {
      this.data[1].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Upright-wbr'] }`] (data) {
      this.data[1].value = `${ convertU8(data) } ºC`;
    },
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Upright-wbl'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Upright-wbl'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    },
  }
};
</script>

<style>
  .uprights {
    background-color: #ffffffb0;
    padding: 10px;
    padding-top: 0;
    border: 1px solid #ddd;
  }
</style>