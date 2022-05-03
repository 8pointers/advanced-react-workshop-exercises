import { useContext, useEffect, useState } from 'react';
import ReduxContext from './context';

const useSelector = (selector) => {
  const store = useContext(ReduxContext);
  const [state, setState] = useState(selector(store.getState()));
  useEffect(() => {
    return store.subscribe(() => setState(selector(store.getState())));
  }, [store, selector]);
  return state;
};

export default useSelector;
