<template>
     <div class="data-header">
       <section class="car-speedometer">
         <indicator-speedometer />
         <Indicator-rpm :max="maxRpm" :current="currentRpm" />
       </section>
        <section class="car-details">
          <Indicator-gear class="car-details__gear" />
          <Indicator-clutch class="car-details__clutch" :active="clutchActive" />
        </section>

        <section class="car-pedals">
          <Indicator-pedals />
        </section>

        <section class="car-motor">
          <Element-info>
            <div class="element-info__icon">
              <Icon-Temp />
            </div>
            <dl class="element-info-data">
              <div class="element-info-data__item">
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
            </dl>
          </Element-info>
          <Element-info>
            <div class="element-info__icon">
              <Icon-engine />
            </div>
            <dl class="element-info-data">
              <div class="element-info-data__item">
                <dd class="element-info-data__value">120 ºC</dd>
              </div>
            </dl>
          </Element-info>
          <Element-info>
            <div class="element-info__icon">
              <Icon-battery />
            </div>
            <dl class="element-info-data">
              <div class="element-info-data__item">
                <dd class="element-info-data__value">12.50 V</dd>
              </div>
            </dl>
          </Element-info>
        </section>
    </div>
</template>

<script>
  import {
    IconBattery,
    IconEngine,
    IconTemp
  } from '../components/icons/index';
  import {
    ElementInfo
  } from '../components/ui/index';

  import {
    IndicatorSpeedometer,
    IndicatorGear,
    IndicatorRpm,
    IndicatorClutch,
    IndicatorPedals,
  } from '../components/Indicators/index';

  export default {
    name: 'Header',
    components: {
      ElementInfo,
      IndicatorSpeedometer,
      IndicatorGear,
      IndicatorRpm,
      IndicatorClutch,
      IndicatorPedals,
      IconBattery,
      IconEngine,
      IconTemp
    },
    props: {},
    data: () => ({
      maxRpm: 12000,
      currentRpm: 8200,
      clutchActive: true
    })
  };
</script>

<style>
  .data-header {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 10px;
  }
  .car-details {
    border: 2px solid #d9d9d9;
    padding: 10px;
    width: 30%;
  }

  .car-pedals {
    display: flex;
    flex: 1;
  }

  .car-speedometer {
    flex: 1;
  }

  .car-details {
    display:flex;
    margin: 0 10%;
    width: 150px;
  }

    .car-details__gear {
      flex: 1;
      font-size: 5rem;
    }

  .car-motor .element-info__icon {
      width: 35px;
  }

</style>
