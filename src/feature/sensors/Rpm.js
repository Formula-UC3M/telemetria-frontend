import { IndicatorRpm } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

IndicatorRpm.props.topic = 'formula-fake-data/ecu/rpm';
IndicatorRpm.props.mqttProp = 'current';

export default withMqttSubscription(IndicatorRpm);
