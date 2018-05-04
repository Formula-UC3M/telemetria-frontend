<template>
  <div class="pedals">
    <div class="pedal brake-pedal">
      freno
    </div>
    <div class="pedal throttle-pedal">
      acelerador
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndicatorPedals',
  data() {
    return {
      msg: 'Here Stub data',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .pedals {
    background-color: rebeccapurple;
    display: flex;
    height: 135px;
    justify-content: space-between;
    width: 60px;
  }
  .pedal {
    background-color: #d9d9d9;
    height: 100%;
    width: 23px;
  }
</style>
