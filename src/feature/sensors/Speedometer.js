import { IndicatorSpeedometer } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';

IndicatorSpeedometer.props.topic = 'formula-fake-data/speed';

export default withMqttSubscription(IndicatorSpeedometer);
