<template>
  <div class="uprights">
    <Element-info
      :icon="IconSuspension"
      :title="title"
      :data="uprights" />
  </div>
</template>

<script>
  import {
    IconSuspension
  } from '../icons/index';

  import {
    ElementInfo
  } from '../ui/index';

  export default {
    name: 'IndicatorSpeedometer',
    props: {
      title: String,
      uprights: Array
    },
    components: {
      ElementInfo,
      IconSuspension
    }
  };
</script>

<style>
</style>
