<template>
  <div class="water">
    <Element-info
      :icon="IconTemp"
      :data="data"
      :info="info"
    />
  </div>

</template>


<script>
import { ElementInfo } from '../ui/index';
import { IconTemp } from '../icons/index';
import { convertU8 } from '../../utils/tools';
import {
  ROUTES_PREFIX,
  FAKE_DATA_ROUTES_PREFIX,
  ROUTES_BY_COMPONENT
} from '../../utils/constants';

export default {
  name: 'IndicatorWaterTemp',
  components: {
    ElementInfo
  },
  data() {
    return {
      info: 'Water temp',
      IconTemp,
      data: [
        {
          value: '-0 ºC'
        }
      ]
    };
  },
  mqtt: {
    [`${ ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Water-temp'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    },
    [`${ FAKE_DATA_ROUTES_PREFIX }/${ ROUTES_BY_COMPONENT['Water-temp'] }`] (data) {
      this.data[0].value = `${ convertU8(data) } ºC`;
    }
  }
};
</script>

<style>
  .water {
    background-color: #ffffffb0;
    padding: 8px;
    border: 1px solid #eee;
    box-sizing: border-box;
  }
</style>
