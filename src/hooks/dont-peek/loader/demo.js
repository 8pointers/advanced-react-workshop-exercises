import React, { useEffect, useState } from 'react';
import { decorate, useLoaderStatus } from './loader';

const delay = (millis) => new Promise((resolve) => setTimeout(resolve, millis));

const fetchIP = decorate('fetchIP')(() =>
  delay(500)
    .then(() => fetch('/api/ipify?format=json'))
    .then((response) => response.json())
    .then(({ ip }) => ip)
);

const MyIP = () => {
  const [ip, setIp] = useState();
  useEffect(() => {
    fetchIP().then(setIp);
  }, []);
  return <div>IP: {ip}</div>;
};

const Loader = ({ operationName }) => {
  const isLoading = useLoaderStatus(operationName);
  return (
    isLoading && (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )
  );
};

const Demo = () => (
  <>
    <Loader />
    <Loader operationName="fetchIP" />
    <Loader operationName="notFetchIP" />
    <MyIP />
  </>
);

export default Demo;
