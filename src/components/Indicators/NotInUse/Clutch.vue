<template>
  <div class="clutch" :class="{'clutch--active': !!active}">&nbsp;</div>
</template>

<script>
export default {
  name: 'IndicatorClutch',
  props: {
    active: Boolean,
    default: false
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .clutch {
    border-radius: 50%;
    height: 30px;
    width: 30px;
  }

  .clutch--active {
    background-color: red;
  }
</style>
