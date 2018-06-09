import { IndicatorClutch } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

IndicatorClutch.props.topic = 'formula-fake-data/clutch';
IndicatorClutch.props.mqttProp = 'active';

export default withMqttSubscription(IndicatorClutch);
