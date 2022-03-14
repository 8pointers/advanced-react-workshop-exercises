import React, { useEffect } from 'react';
import { fromEvent, interval } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const click$ = fromEvent(document, 'click');
const interval$ = interval(1000);
const ip$ = ajax.getJSON('/api/ipify?format=json');

const ObservableDemo = () => {
  useEffect(() => {
    click$.subscribe({ next: (event) => console.log('click', event) });
    interval$.subscribe({ next: (counter) => console.log('interval', counter) });
    ip$.subscribe({ next: (ip) => console.log('ip', ip) });
  }, []);
  return <div>Hit F12 and check the console output!</div>;
};

export default ObservableDemo;
