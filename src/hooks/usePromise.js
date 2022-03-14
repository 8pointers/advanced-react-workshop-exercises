import { useEffect, useState } from 'react';

const PromiseStatus = {
  Pending: 'Pending',
  Fulfilled: 'Fulfilled',
  Rejected: 'Rejected',
};

const usePromise = (promiseFn, deps) => {
  const [state, setState] = useState([PromiseStatus.Pending, undefined, undefined]);
  useEffect(() => {
    const promise = promiseFn();
    promise.then(
      (result) => setState([PromiseStatus.Fulfilled, undefined, result]),
      (error) => setState([PromiseStatus.Rejected, error, undefined])
    );
  }, deps);
  return state;
};

const delay = (millis) => new Promise((resolve) => setInterval(resolve, millis));

const UsePromiseDemo = () => {
  const [status, error, ipAddres] = usePromise(
    () =>
      delay(500)
        .then(() => fetch('/api/ipify?format=json'))
        .then((response) => response.json())
        .then(({ ip }) => ip),
    []
  );
  return (
    <div>
      {status === PromiseStatus.Pending && (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {status === PromiseStatus.Rejected && (
        <div className="alert alert-danger" role="alert">
          An error occurred: {error}
        </div>
      )}
      {status === PromiseStatus.Fulfilled && (
        <div>Your ip address is {ipAddres}</div>
      )}
    </div>
  );
};
export { PromiseStatus, usePromise, UsePromiseDemo };
