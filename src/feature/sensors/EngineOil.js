import { IndicatorClutch } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

const options = {
  topic: 'formula-fake-data/ecu/oil_temp_eng',
  mqttProp: 'current'
};

export default withMqttSubscription(IndicatorClutch, options);
