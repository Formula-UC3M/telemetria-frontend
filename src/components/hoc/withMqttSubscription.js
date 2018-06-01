import Vue from 'vue';

const withMqttSubscription = (component) => {
  const inheritedProps = component.props || [];

  return Vue.component('withMqtt', {
    props: [
      ...inheritedProps
    ],
    mqtt: {
      'formula-fake-data/clutch' (data) {
        console.log(`----> ${data.toString()}`);
        this.active = Boolean(data.toString())
      }
    },
    mounted() {
      this.$mqtt.subscribe('formula-fake-data/clutch');
    },
    render(createElement) {
      return createElement(component, {
        props: {
          ...this.$props
        },
        data() {
          return { active: this.active }
        }
      })
    }
  });
}

export default withMqttSubscription;