import { IndicatorUprights } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

const options = {
  channels: [{
    topic: 'formula-fake-data/ecu/rpm',
    mqttProp: 'current'
  }]
};

export default withMqttSubscription(IndicatorUprights, options);
