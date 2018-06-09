import { IndicatorGear } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

IndicatorGear.props.topic = 'formula-fake-data/pitot';
IndicatorGear.props.mqttProp = 'current';

export default withMqttSubscription(IndicatorGear);
