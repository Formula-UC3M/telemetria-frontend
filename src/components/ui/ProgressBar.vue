<template>
  <div class="progressbar" :class="[classOrientation]">
    <span class="progressbar__inner" :style="[classStyle]"></span>
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
      },
      classStyle() {
        const _orientation = this.orientation === 'horizontal' ? 'width' : 'height';
        let color = "green";

        if (this.percentage > 50 && this.percentage < 60) {
          color = 'yellow';
        } else if (this.percentage >= 60 && this.percentage < 85) {
          color = 'orange';
        } else if (this.percentage >= 85) {
          color = 'red';
        }

        return {
          [_orientation]: `${ this.percentage }%`,
          background: color
        }
      }
    }
  }
</script>

<style>
  .progressbar__inner {
    bottom: 0;
    left: 0;
    position: absolute;
    z-index: 1;
  }

  .progressbar--horizontal {
    background-color: grey;
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
    height: 100%;
    width: 20px;
    position: relative;
  }

    .progressbar--vertical .progressbar__inner {
      background: green;
      width: 100%;
    }
</style>