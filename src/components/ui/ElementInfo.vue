<template>
  <div class="element-info element-info--horizontal">
    <slot></slot>
  </div>
</template>

<script>
  export default {
   name: 'ElementInfo'
  };
</script>


<style lang="scss">

  .element-info {
    display: flex;
  }

  .element-info--horizontal{
    flex-flow: row wrap;
  }

  .element-info__title {
    flex: 0 0 100%;
    font-size: 2.5rem;
    line-height: 1.5;
  }

  .element-info__icon {
    margin-right: 20px;
    width: 100px;
  }

  .element-info-data {
    display: flex;
    flex: 1;
    font-size: 1.5rem;
  }

  .element-info--horizontal {
    .element-info-data {
      flex-wrap: wrap;
    }

    .element-info-data__label {
        text-align: left;
        flex: 1;
    }
  }

  .element-info-data__item {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex: 0 0 100%;
  }

  .element-info-data__value {
    font-family: 'Digit';
  }

</style>

