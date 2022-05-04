const reducer = (count = 0, { type }) => (type === 'INCREMENT' ? count + 1 : count);

export default reducer;
