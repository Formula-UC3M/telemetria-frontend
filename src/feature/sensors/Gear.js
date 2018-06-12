import { IndicatorGear } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

const options = {
  topic: 'formula-fake-data/pitot',
  mqttProp: 'current'
};

export default withMqttSubscription(IndicatorGear, options);
