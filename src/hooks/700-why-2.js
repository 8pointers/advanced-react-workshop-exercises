import { Component, useState, useEffect } from 'react';

class Clock1 extends Component {
  state = { now: new Date() };
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ now: new Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return <div>{this.state.now.toLocaleTimeString()}</div>;
  }
}

const Clock2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(interval);
  });
  return <div>{currentTime.toLocaleTimeString()}</div>;
};

const Demo = () => (
  <>
    <Clock1 />
    <Clock2 />
  </>
);

export default Demo;
