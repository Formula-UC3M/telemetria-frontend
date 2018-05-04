<template>
  <div class="gear">
    <p> 4 </p>
  </div>
</template>

<script>
export default {
  name: 'IndicatorGear',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .gear {
    align-items: center;
    background-color: lightgrey;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    height: 50px;
    width: 50px;
  }
  .gear p {
    color: #0e0e0e;
    font-family: monospace;
    font-size: 2em;
    margin: 0;
  }
</style>
