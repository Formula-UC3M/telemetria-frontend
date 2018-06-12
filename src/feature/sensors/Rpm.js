import { IndicatorRpm } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

const options = {
  topic: 'formula-fake-data/ecu/rpm',
  mqttProp: 'current'
};

export default withMqttSubscription(IndicatorRpm, options);
