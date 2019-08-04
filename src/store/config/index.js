import actions from './action';
import mutations from './mutation';

export default {
  state: {
    sensors: {
      brakePosition: {min: 0, max: 100},
      brakeTemperature: {min: 0, max: 100},
      ecu: {
        oilTempEng: {min: 0, max: 100},
        rpm: {min: 0, max: 10000},
        waterTempEng: {min: 0, max: 100}
      },
      radiatorTemperature: {min: 0, max: 100},
      speed: {min: 0, max: 300},
      suspension: {min: 0, max: 100},
      throttlePosition: {min: 0, max: 100},
      uprightTemperature: {min: 0, max: 100}
    }
  },
  actions,
  mutations
}