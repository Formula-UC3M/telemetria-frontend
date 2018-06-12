const withMqttSubscription = (component, options) => {

  const channels = options.channels.reduce((acc, channel) => {
    return {
      ...acc,
      [channel.topic](data) {
        this[channel.mqttProp] = parseFloat(data.toString());
      }
    }
  }, {});

  return {
    props: options.channels.map(channel => channel.mqttProp),
    mqtt: channels,
    mounted() {
      options.channels.map(channel => this.$mqtt.subscribe(channel.topic));
    },
    render(createElement) {
      console.log(this.$props);
      return createElement(component, {
        functional: true,
        attrs: this.$attrs,
        props: this.$props
      });
    }
  }
};

export default withMqttSubscription;