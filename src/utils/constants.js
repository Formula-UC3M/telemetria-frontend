export const ROUTES_PREFIX = 'data';
export const FAKE_DATA_ROUTES_PREFIX = 'fake';
export const ROUTES_BY_COMPONENT = {  
    'Water-temp': 'ecu/water_temp_eng',
    'Oil-temp': 'ecu/oil_temp_eng',
    'Rpm': 'ecu/rpm',
    'Suspension-wfl': 'wfl/suspension',
    'Suspension-wfr': 'wfr/suspension',
    'Suspension-wbl': 'wbl/suspension',
    'Suspension-wbr': 'wbr/suspension',
    'Brake-temp-wfl': 'wfl/brake_temperature',
    'Brake-temp-wfr': 'wfr/brake_temperature',
    'Brake-temp-wbl': 'wbl/brake_temperature',
    'Brake-temp-wbr': 'wbr/brake_temperature',
    'Radiator-in': 'radiator_temperature/sensor_in',
    'Radiator-middle': 'radiator_temperature/sensor_middle',
    'Radiator-out': 'radiator_temperature/sensor_out',
    'Radiator-t': 'radiator_temperature/sensor_t',
    'Upright-wbl': 'wbl/upright_temperature',
    'Upright-wbr': 'wbr/upright_temperature',
    'Pedals-throttle': 'throttle_position',
    'Pedals-brake': 'brake_position',
    'Speedometer': 'speed'
};

export const SUBSCRIBERS = [
    '/+',
    '/ecu/+',
    '/wfl/+',
    '/wfr/+',
    '/wbl/+',
    '/wbr/+',
    '/radiator_temperature/+'
];