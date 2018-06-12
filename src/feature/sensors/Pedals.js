import withMqttSubscription from '../../components/hoc/withMqttSubscription';

import { IndicatorPedals } from '../../components/Indicators/index';

// const stateToProps = {
//   throttleMax: state => {
//     console.log(state, state.config.sensors.throttlePosition.max);
//     return 120
//   }
// };

const options = {
  channels: [
    {
      topic: 'formula-fake-data/throttle_position',
      mqttProp: 'throttleCurrent'
    },
    {
      topic: 'formula-fake-data/brake_position',
      mqttProp: 'brakeCurrent'
    }
  ]
};

export default withMqttSubscription(IndicatorPedals, options);
