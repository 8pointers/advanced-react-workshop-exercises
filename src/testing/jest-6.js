const getOwnIPAddress = () =>
  fetch('https://api.ipify.org/?format=json')
    .then((response) => response.json())
    .then(({ ip }) => ip);

export default getOwnIPAddress;
