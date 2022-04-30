import { useEffect, useState } from 'react';

const delay = (millis) => new Promise((resolve) => setInterval(resolve, millis));

class EventDispatcher {
  constructor() {
    this.listeners = [];
  }
  addEventListener(eventType, listener) {
    this.listeners.push({ eventType, listener });
  }
  removeEventListener(eventType, listener) {
    this.listeners = this.listeners.filter(
      (l) => l.eventType !== eventType || l.listener !== listener
    );
  }
  dispatchEvent(eventType, event) {
    this.listeners.filter((l) => l.eventType === eventType).forEach((l) => l.listener(event));
  }
}

const getSearchParam = (paramName) => new URLSearchParams(window.location.search).get(paramName);

const someTasksTodo = [
  { id: 1, name: 'First task', isComplete: false },
  { id: 2, name: 'Second task', isComplete: true },
  { id: 3, name: 'Third task', isComplete: false },
];

const useAutoRefresh = (millis) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setCount((count) => count + 1), millis);
    return () => clearInterval(interval);
  }, [millis]);
  return count;
};

export { delay, EventDispatcher, getSearchParam, someTasksTodo, useAutoRefresh };
