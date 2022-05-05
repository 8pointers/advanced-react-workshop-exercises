import { useDebugValue, useEffect, useState, useRef } from 'react';

const delay = (millis) => new Promise((resolve) => setInterval(resolve, millis));

const log = console.log;

const useRenderCount = (name) => {
  const count = ++useRef(0).current;
  useDebugValue(count);
  log(`${name}:renderCount`, count);
  return count;
};

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

const deepFreeze = (object) => {
  Object.entries(object)
    .filter(([name, value]) => object.hasOwnProperty(name) && typeof value === 'object')
    .forEach(([, value]) => deepFreeze(value));
  return Object.freeze(object);
};

export {
  delay,
  useRenderCount,
  EventDispatcher,
  getSearchParam,
  someTasksTodo,
  useAutoRefresh,
  deepFreeze,
};
