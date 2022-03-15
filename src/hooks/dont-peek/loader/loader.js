import { useEffect, useState } from 'react';

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
    this.listeners
      .filter((l) => l.eventType === eventType)
      .forEach((l) => l.listener(event));
  }
}

const eventDispatcher = new EventDispatcher();

const decorate = (operationName) => (fn) => {
  return (...args) => {
    eventDispatcher.dispatchEvent('operationStatusChanged', {
      operationName,
      isRunning: true,
    });
    return fn(...args).finally(() =>
      eventDispatcher.dispatchEvent('operationStatusChanged', {
        operationName,
        isRunning: false,
      })
    );
  };
};

const useLoaderStatus = (operationName) => {
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    const listener = ({
      operationName: evOperationName,
      isRunning: evIsRunning,
    }) => {
      if (operationName === undefined || operationName === evOperationName) {
        setIsRunning(evIsRunning);
      }
    };
    eventDispatcher.addEventListener('operationStatusChanged', listener);
    return () =>
      eventDispatcher.removeEventListener('operationStatusChanged', listener);
  }, [operationName]);
  return isRunning;
};

export { decorate, useLoaderStatus };
