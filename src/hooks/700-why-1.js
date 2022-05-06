import { Component, useState, useEffect } from 'react';

const eventTypes = ['online', 'offline'];

class OnlineStatus1 extends Component {
  state = { isOnline: window.navigator.onLine };
  listener = () => this.setState({ isOnline: window.navigator.onLine });
  componentDidMount() {
    eventTypes.forEach((t) => window.addEventListener(t, () => this.listener()));
  }
  componentWillUnmount() {
    eventTypes.forEach((t) => window.removeEventListener(t, () => this.listener()));
  }
  render() {
    return <span>{this.state.isOnline ? '😀' : '🤕'}</span>;
  }
}

const OnlineStatus2 = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    const listener = () => setIsOnline(window.navigator.onLine);
    eventTypes.forEach((t) => window.addEventListener(t, listener));
    return () => eventTypes.forEach((t) => window.removeEventListener(t, listener));
  }, []);
  return <span>{isOnline ? '😀' : '🤕'}</span>;
};

const Demo = () => (
  <>
    <OnlineStatus1 />
    <OnlineStatus2 />
  </>
);

export default Demo;
