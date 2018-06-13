import { IndicatorClutch } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

const options = {
  channels: [{
    topic: 'formula-fake-data/clutch',
    mqttProp: 'active'
  }]
};

export default withMqttSubscription(options)(IndicatorClutch);
