import { IndicatorClutch } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

IndicatorClutch.props.topic = 'formula-fake-data/clutch';

export default withMqttSubscription(IndicatorClutch);
