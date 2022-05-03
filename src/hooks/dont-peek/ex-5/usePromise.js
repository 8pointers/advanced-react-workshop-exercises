import { useCallback, useEffect, useState } from 'react';

const PromiseStatus = {
  Pending: 'Pending',
  Fulfilled: 'Fulfilled',
  Rejected: 'Rejected',
};

const usePromise = (fn, { disable } = {}) => {
  const [state, setState] = useState({});
  const execute = useCallback(() => {
    setState({ status: PromiseStatus.Pending });
    fn().then(
      (result) => setState({ status: PromiseStatus.Fulfilled, result }),
      (error) => setState({ status: PromiseStatus.Rejected, error })
    );
  }, [fn]);
  useEffect(() => disable || execute(), [disable, execute]);
  return { ...state, execute };
};

export { PromiseStatus, usePromise };
