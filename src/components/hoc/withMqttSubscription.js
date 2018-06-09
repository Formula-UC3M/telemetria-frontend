import Vue from 'vue';

const withMqttSubscription = (component) => {
  const inheritedProps = component.props || [];

  return Vue.component('withMqtt', {
    props: [
      ...inheritedProps
    ],
    mqtt: {
      [inheritedProps.topic] (data) {
        console.log(`----> ${inheritedProps.topic} -- ${data.toString()}`);
        this[inheritedProps.mqttProp] = data.toString();
      }
    },
    mounted() {
      this.$mqtt.subscribe(inheritedProps.topic);
    },
    render(createElement) {
      return createElement(component, {
        props: {
          ...this.$props
        },
        data() {
          return {
            [inheritedProps.mqttProp]: this[inheritedProps.mqttProp]
          }
        }
      })
    }
  });
}

export default withMqttSubscription;