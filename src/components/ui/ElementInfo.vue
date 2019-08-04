<template>
  <div class="element-info element-info--horizontal" :title="info">
    <span v-if="title" class="element-info__title">{{ title }}</span>
    <div v-if="icon" class="element-info__icon">
      <component :is="icon" />
    </div>
    <dl class="element-info-data">
      <Element-info-item
        v-for="({ label, value }, index) in data"
        :key="index"
        :label="label"
        :value="value" />
    </dl>
  </div>
</template>

<script>
  import ElementInfoItem from './ElementInfoItem';

  export default {
    name: 'ElementInfo',
    components: {
      ElementInfoItem
    },
    props: {
      title: String,
      icon: Object,
      data: Array,
      info: String
    }
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
    font-size: 1.9rem;
    line-height: 1.5;
    font-weight: 500;
  }

  .element-info__icon {
    margin-right: 20px;
    width: 100px;
  }

  .element-info-data {
    display: flex;
    flex: 1;
    font-size: 1.5rem;
    flex-wrap: wrap;
  }

  .element-info--horizontal {
    .element-info-item__label {
        text-align: left;
        flex: 1;
    }
  }

</style>

