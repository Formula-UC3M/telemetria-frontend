import { IndicatorUprights } from '../../components/Indicators/index';
import withMqttSubscription from '../../components/hoc/withMqttSubscription';
import { default as mockData } from '../../views/mocks/componentData';

const options = {
  topic: 'formula-fake-data/ecu/rpm',
  mqttProp: 'current',
  title: mockData.uprights.title,
  uprights: mockData.uprights.data
};

export default withMqttSubscription(IndicatorUprights, options);
