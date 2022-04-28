const fetchIp = () =>
  fetch('/api/ipify?format=json')
    .then((response) => response.json())
    .then(({ ip }) => ip);

export default fetchIp;
