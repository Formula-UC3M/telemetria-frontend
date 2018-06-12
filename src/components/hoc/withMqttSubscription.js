const withMqttSubscription = (component, options) => ({
  props: [options.mqttProp],
  mqtt: {
    [options.topic] (data) {
      //console.log(`----> ${options.topic} -- ${data.toString()}`);
      this[options.mqttProp] = data.toString();
    }
  },
  mounted() {
    this.$mqtt.subscribe(options.topic);
  },
  render(createElement) {
    //console.log(this.$props);
    return createElement(component, {
      functional: true,
      attrs: this.$attrs,
      props: this.$props
    });
  }
});

export default withMqttSubscription;