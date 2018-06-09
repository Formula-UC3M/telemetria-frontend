<template>
  <div class="gear">
    <span class="gear__label">4</span>
  </div>
</template>

<script>

export default {
  name: 'IndicatorGear',
  props: ['current'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .gear__label {
      font-family: 'Digit';
      color: #0e0e0e;
      font-size: 2em;
    }
</style>
