import { IndicatorSpeedometer } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

const options = {
  topic: 'formula-fake-data/speed',
  mqttProp: 'current'
};

export default withMqttSubscription(IndicatorSpeedometer, options);
