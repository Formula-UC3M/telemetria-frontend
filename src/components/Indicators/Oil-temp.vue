<template>
  <div class="oil">
    <Element-info
      :icon="IconEngine"
      :data="data"
      :info="info"
    />
  </div>
</template>


<script>
import { ElementInfo } from '../ui/index';
import { IconEngine } from '../icons/index';
import { convertU8 } from '../../utils/tools';
import {
  ROUTES_PREFIX,
  FAKE_DATA_ROUTES_PREFIX,
  ROUTES_BY_COMPONENT
} from '../../utils/constants';

export default {
  name: 'IndicatorOilTemp',
  components: {
    ElementInfo
  },
  data() {
    return {
      info: 'Oil Temp',
      IconEngine,
      data: [
        {
          value: '-0 ºC'
        }
      ]
    };
  },
   mqtt: {
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Oil-temp'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Oil-temp'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    }
  }
};
</script>

<style>
  .oil {
    background-color: #ffffffb0;
    padding: 8px;
    border: 1px solid #eee;
    box-sizing: border-box;
  }
</style>
