import { IndicatorSpeedometer } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

IndicatorSpeedometer.props.topic = 'formula-fake-data/speed';
IndicatorSpeedometer.props.mqttProp = 'current';

export default withMqttSubscription(IndicatorSpeedometer);
