const requestIpAddress = () => ({
  type: 'REQUEST_IP_ADDRESS',
});

const receiveIpAddress = (ipAddress) => ({
  type: 'RECEIVE_IP_ADDRESS',
  ipAddress,
});

const fetchIpAddress = () => (dispatch) => {
  dispatch(requestIpAddress());
  return fetch('/api/ipify?format=json')
    .then((response) => response.json())
    .then(({ ip }) => ip)
    .then((ip) => dispatch(receiveIpAddress(ip)));
};

export { requestIpAddress, receiveIpAddress, fetchIpAddress };
