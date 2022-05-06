import { useState, useEffect } from 'react';

const eventTypes = ['online', 'offline'];
const useIsOnline = () => {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);
  useEffect(() => {
    const listener = () => setIsOnline(window.navigator.onLine);
    eventTypes.forEach((t) => window.addEventListener(t, listener));
    return () => eventTypes.forEach((t) => window.removeEventListener(t, listener));
  }, []);
  return isOnline;
};

const useCurrentTime = (refreshInterval = 1000) => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), refreshInterval);
    return () => clearInterval(interval);
  }, [refreshInterval]);
  return currentTime;
};

const useBatteryLevelPct = () => {
  const [batteryLevelPct, setBatteryLevelPct] = useState(100);
  useEffect(() => {
    let battery;
    const listener = () => setBatteryLevelPct(100 * battery.level);
    navigator.getBattery().then((b) => {
      if (b) {
        battery = b;
        listener();
        battery.addEventListener('levelchange', listener);
      }
    });
    return () => battery && battery.removeEventListener('levelchange', listener);
  }, []);
  return batteryLevelPct;
};

const Demo = () => (
  <span>
    {useIsOnline() ? '😀' : '🤕'} {useCurrentTime().toLocaleTimeString()}{' '}
    <span className={`battery-${10 * Math.floor(useBatteryLevelPct() / 10)}`} />
  </span>
);

export default Demo;
