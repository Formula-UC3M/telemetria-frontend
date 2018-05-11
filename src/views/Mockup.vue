<template>
  <div class="page">
    <section class="page-header">
      <Header class="header-component" />
    </section>
    <section class="page-body">
      <div class="page-body__car">
        <Car class="car-component" />
      </div>
      <div class="page-body__info">
          <Element-info>
            <span class="element-info__title">Radiator 1</span>
            <div class="element-info__icon">
              <Icon-fan />
            </div>
            <dl class="element-info-data">
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Inlet temp</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Outlet temp</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
            </dl>
          </Element-info>

          <Element-info>
            <span class="element-info__title">Radiator 2</span>
            <div class="element-info__icon">
              <Icon-fan />
            </div>
            <dl class="element-info-data">
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Inlet temp</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Outlet temp</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
            </dl>
          </Element-info>
      </div>
    </section>

    <section class="page-footer">
      <div class="wheels">
         <Element-info>
            <span class="element-info__title">Brakes</span>
            <div class="element-info__icon">
              <Icon-brake />
            </div>
            <dl class="element-info-data">
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Front Left</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Front Right</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Back left</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Back Right</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
            </dl>
          </Element-info>
      </div>
      <div class="uprights">
         <Element-info>
            <span class="element-info__title">Uprights</span>
            <div class="element-info__icon">
              <Icon-suspension />
            </div>
            <dl class="element-info-data">
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Front Left</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Front Right</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Back left</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
              <div class="element-info-data__item">
                <dt class="element-info-data__label">Back Right</dt>
                <dd class="element-info-data__value">20 ºC</dd>
              </div>
            </dl>
          </Element-info>
      </div>
    </section>
  </div>
</template>

<script>

import {
  Car,
  Header,
} from '../components/index';

import {
  ElementInfo
} from '../components/ui/index';

import {
  IconFan,
  IconBrake,
  IconSuspension
} from '../components/icons/index';

export default {
  name: 'Mockup',
  components: {
    Car,
    Header,
    ElementInfo,
    IconFan,
    IconBrake,
    IconSuspension
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style lang="scss">
  .page {
    display: flex;
    flex-direction: column;
  }

    .page-body {
      align-content: center;
      display: flex;
      flex-direction: row;
      flex: 1;
    }

  .page-body__car {
    align-self: center;
    width: 100%;
  }

  .page-body__info {
    align-self: center;
    margin: 0 50px;

    & > * + * {
      margin-top: 30px;
    }
  }

  .page-footer {
    display: flex;
    padding: 50px;
    & > * + * {
      margin-left: 50px;
    }
  }

</style>
