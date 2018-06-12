import { IndicatorRpm } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

const options = {
  channels: [{
    topic: 'formula-fake-data/ecu/rpm',
    mqttProp: 'rpmCurrent'
  }]
};

export default withMqttSubscription(IndicatorRpm, options);
