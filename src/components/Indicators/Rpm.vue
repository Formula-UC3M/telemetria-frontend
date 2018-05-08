<template>
  <div class="rpm">
    <span class="rpm__label">{{ current }} rpm</span>
    <div class="rpm__level progressbar progressbar--horizontal">
      <span class="progressbar__inner" :style="{ 'width': `${_percentage}%` }"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndicatorRpm',
  props: {
    max: {
      type: Number,
      default: 0
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      msg: 'Mensaje de RPM faster and furious!!!'
    };
  },
  computed: {
    _percentage() {
      return (this.current * 100) / this.max;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .rpm__label {
    color: red;
  }

  .progressbar--horizontal {
    background-color: grey;
    min-width: 300px;
    height: 20px;
    width: 100%;
    position: relative;
  }

    .progressbar__inner {
      background: green;
      content: '';
      top: 0;
      left: 0;
      height: 100%;
      position: absolute;
      z-index: 1;
    }
</style>
