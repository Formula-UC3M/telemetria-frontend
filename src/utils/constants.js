export const ROUTES_PREFIX = 'data';
export const FAKE_DATA_ROUTES_PREFIX = 'fake';
export const ROUTES_BY_COMPONENT = {  
    'Water-temp': 'ecu/water_temp_eng',
    'Oil-temp': 'ecu/oil_temp_eng',
    'Rpm': 'ecu/rpm',
    'Suspension':[  
       'wfl/suspension',
       'wfr/suspension',
       'wbl/suspension',
       'wbr/suspension'
    ],
    'BrakeTemperature':[  
       'wfl/brake_temperature',
       'wfr/brake_temperature',
       'wbl/brake_temperature',
       'wbr/brake_temperature'
    ],
    'radiatorTemperature':[  
       'radiator_temperature/sensor_in',
       'radiator_temperature/sensor_middle',
       'radiator_temperature/sensor_out',
       'radiator_temperature/sensor_t'
    ],
    'Upright-wbl': 'wbl/upright_temperature',
    'Upright-wbr': 'wbr/upright_temperature',
    'Pedals-throttle': 'throttle_position',
    'Pedals-brake': 'brake_position',
    'Speedometer': 'speed'
};

export const ROUTES_BY_RANGE = {  
    'ecu.waterTempEng':[  
       'ecu/water_temp_eng'
    ],
    'ecu.oilTempEng':[  
       'ecu/oil_temp_eng'
    ],
    'ecu.rpm':[  
       'ecu/rpm'
    ],
    'suspension':[  
       'wfl/suspension',
       'wfr/suspension',
       'wbl/suspension',
       'wbr/suspension'
    ],
    'brakeTemperature':[  
       'wfl/brake_temperature',
       'wfr/brake_temperature',
       'wbl/brake_temperature',
       'wbr/brake_temperature'
    ],
    'radiatorTemperature':[  
       'radiator_temperature/sensor_in',
       'radiator_temperature/sensor_middle',
       'radiator_temperature/sensor_out',
       'radiator_temperature/sensor_t'
    ],
    'uprightTemperature':[  
       'wbl/upright_temperature',
       'wbr/upright_temperature'
    ],
    'throttlePosition':[  
       'throttle_position'
    ],
    'brakePosition':[  
       'brake_position'
    ],
    'speed':[  
       'speed'
    ]
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