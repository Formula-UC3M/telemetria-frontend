<template functional>
    <component :is="injections.components.IndicatorClutch"></component>
</template>

<script>
  import { IndicatorClutch } from '../../components/Indicators/index';

  export default {
    inject: {
      components: {
        default: {
          IndicatorClutch
        }
      }
    }
  };
</script>