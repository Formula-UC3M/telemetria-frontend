<template>
  <div class="speedometer">
    <div class="speedometer-label">
      <span class="speedometer-label__num">{{speed}}</span>
      <span class="speedometer-label__unit">KM/H</span>
    </div>
  </div>
</template>

<script>
import {
  IconSpeedometer
} from '../icons/index';
function convert(Uint8Arr) {
  const length = Uint8Arr.length;
  const buffer = Buffer.from(Uint8Arr);
  const result = buffer.readUIntBE(0, length);
  return result;
}

export default {
  name: 'IndicatorSpeedometer',
  components: {
    IconSpeedometer
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      speed: 0
    };
  },
  mqtt: {
    'formula-fake-data/speed' (data) {
      if (data instanceof Uint8Array) {
        const speed = data[0]
        this.speed = speed
      } else {
        this.speed = convert(data)
      }
    }
  },
  mounted () {
    console.log(this.$mqtt)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .speedometer {
    display: flex;
    align-items: center;
  }
  .speedometer-label {
    font-size: 7rem;
    margin-left: 10px;
  }
    .speedometer-label__num,
    .speedometer-label__unit {
      font-family: 'Digit'
    }

    .speedometer-label__unit {
      font-size: 2rem;
    }
</style>
