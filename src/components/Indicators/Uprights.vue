<template>
  <div class="uprights">
    <Element-info
      :icon="IconSuspension"
      :title="title"
      :data="uprights" />
  </div>
</template>

<script>
  import { IconSuspension } from '../icons/index';

  import {
    ElementInfo
  } from '../ui/index';

  export default {
    name: 'IndicatorUprights',
    props: {
      title: String,
      uprights: Array
    },
    components: {
      ElementInfo,
    },
    data() {
      return {
        IconSuspension
      }
    }
  };
</script>
