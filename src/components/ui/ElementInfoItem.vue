<template>
  <div class="element-info-item">
    <dt v-if="label" class="element-info-item__label">{{ label }}</dt>
    <dd v-if="value" class="element-info-item__value">{{ value }}</dd>
  </div>
</template>

<script>
  export default {
   name: 'ElementInfoItem',
   props: {
     label: String,
     value: String|Number
   }
  };
</script>


<style lang="scss">
  .element-info-item {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 100%;
  }

  .element-info-item__value {
    font-family: 'Digit';
  }
</style>

