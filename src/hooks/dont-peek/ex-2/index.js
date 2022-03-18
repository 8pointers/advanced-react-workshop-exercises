import { memo } from 'react';
import { ErrorProvider, useError } from './error';

const ErrorMaker = () => {
  const { dispatch: signalError } = useError();
  return (
    <button className="btn btn-primary" onClick={() => signalError(`Something gone wrong at ${new Date()}`)}>
      Make error happen!
    </button>
  );
};

const doMemo = false;
const ErrorShower = (doMemo ? memo : (x) => x)(() => {
  const { errors, acknowledge } = useError();
  return errors.map(({ error, id }) => (
    <div key={id} className="alert alert-warning alert-dismissible">
      <strong>{error}</strong>
      <button onClick={() => acknowledge(id)} className="btn-close"></button>
    </div>
  ));
});

const Demo = () => (
  <ErrorProvider>
    <ErrorShower />
    <ErrorMaker />
  </ErrorProvider>
);

export default Demo;
