const pubsub = {
  events: {},
  subscribe(event, fn) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(fn);
  },
  unsubscribe(event, fn) {
    if (this.events[event])
      this.events[event] = this.events[event].filter((fun) => fun !== fn);
  },
  publish(event, data) {
    if (this.events[event]) this.events[event].forEach((fun) => fun(data));
  }
};

export default pubsub;
