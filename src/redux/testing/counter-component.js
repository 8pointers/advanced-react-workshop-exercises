import React from 'react';
import { connect } from 'react-redux';
import { increment } from './counter-action-creators';

const UnconnectedCounter = ({ count, onIncrement }) => (
  <div onClick={() => onIncrement(1)}>{count}</div>
);

const Counter = connect(
  (count) => ({ count }),
  (dispatch) => ({ onIncrement: (delta) => dispatch(increment(delta)) })
)(UnconnectedCounter);

export { Counter, UnconnectedCounter };
