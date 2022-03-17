const reducer = (state = {}, action) => {
  if (action.type === 'REQUEST_IP_ADDRESS') {
    return {
      ...state,
      isFetching: true,
    };
  }
  if (action.type === 'RECEIVE_IP_ADDRESS') {
    return {
      isFetching: false,
      ipAddress: action.ipAddress,
    };
  }
  return state;
};

export default reducer;
