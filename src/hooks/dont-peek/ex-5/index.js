import { useCallback } from 'react';
import { delay } from '../../../util';
import { PromiseStatus, usePromise } from './usePromise';

const Demo = () => {
  const fetchIp = useCallback(
    () =>
      delay(500)
        .then(() => fetch('/api/ipify?format=json'))
        .then((response) => response.json())
        .then(({ ip }) => ip),
    []
  );
  const { status, error, result, execute } = usePromise(fetchIp);
  return (
    <div>
      <button onClick={execute}>Refresh</button>
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
      {status === PromiseStatus.Fulfilled && <div>Your ip address is {result}</div>}
    </div>
  );
};
export default Demo;
