const withMqttSubscription = options => Component => {

  const channels = options.channels.reduce((acc, channel) => {
    return {
      ...acc,
      [channel.topic](data) {
        this[channel.mqttProp] = parseFloat(data.toString());
      }
    }
  }, {});

  const propData = () => options.channels.reduce((acc, channel) => {
    return {
      [`__${channel.mqttProp}`]: 0
    }
  });

  return {
    name: Component.name + 'HOC',
    data: propData,
    mqtt: channels,
    mounted() {
      options.channels.map(channel => this.$mqtt.subscribe(channel.topic));
    },
    render(createElement) {
      return createElement(Component, {
        functional: true,
        attrs: this.$attrs,
        props: this.$props
      });
    }
  }
};

export default withMqttSubscription;