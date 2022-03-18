import { useContext } from 'react';
import ReduxContext from './context';

const useDispatch = () => useContext(ReduxContext).dispatch;

export default useDispatch;
