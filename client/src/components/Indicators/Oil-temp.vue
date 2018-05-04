<template>
  <div class="oil">
    <p>Datos de temperatura del aceite en motor</p>
  </div>

</template>


<script>
export default {
  name: 'IndicatorOilTemp',
  data() {
    return {
      msg: 'Esta es la temperatura del aceitito',
    };
  },
};
</script>

<style>
.oil {
  background-color: darkred;
}

</style>
