<template>
  <div class="kmh">
    <p> <span> 237 </span> km/h  </p>

  </div>
</template>

<script>
export default {
  name: 'IndicatorSpeedometer',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .kmh {
    color: #d9d9d9;
    line-height: 10vh;
    font-size: 1.25em;
  }
  .kmh p {
    margin: 0;
  }
  .kmh span {
    font-size: 2em;
  }
</style>
