<template>
  <div class="progressbar" :class="[classOrientation]">
    <span class="progressbar__inner" :style="{ 'width': `${percentage}%` }"></span>
  </div>
</template>

<script>
  export default {
    name: 'ProgressBar',
    props: {
      percentage: Number,
      orientation: {
        type: String,
        default: 'horizontal'
      }
    },
    computed: {
      classOrientation() {
        return `progressbar--${this.orientation}`;
      }
    }
  }
</script>

<style>
  .progressbar__inner {
    top: bottom;
    left: 0;
    position: absolute;
    z-index: 1;
  }

  .progressbar--horizontal {
    background-color: grey;
    min-width: 300px;
    height: 20px;
    width: 100%;
    position: relative;
  }

    .progressbar--horizontal .progressbar__inner {
      background: green;
      height: 100%;
    }

  .progressbar--vertical {
    background-color: grey;
    min-width: 300px;
    height: 20px;
    width: 100%;
    position: relative;
  }

    .progressbar--vertical .progressbar__inner {
      background: green;
      width: 100%;
    }
</style>