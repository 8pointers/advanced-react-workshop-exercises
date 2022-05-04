import React from 'react';
import { connect } from 'react-redux';
import { fetchIpAddress } from './ip-action-creators';

const UnconnectedIP = ({ ip, onFetch }) => (
  <>
    <button onClick={() => onFetch()} data-testid="fetch">
      Fetch
    </button>
    {ip && <div data-testid="ip">IP: {ip}</div>}
  </>
);

const IP = connect(
  ({ ipAddress }) => ({ ip: ipAddress }),
  (dispatch) => ({ onFetch: () => dispatch(fetchIpAddress('message')) })
)(UnconnectedIP);

export { IP, UnconnectedIP };
