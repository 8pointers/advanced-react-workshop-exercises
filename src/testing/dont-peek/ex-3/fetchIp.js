const fetchIp = (fetchJson) => () => fetchJson('/api/ipify?format=json').then(({ ip }) => ip);

export default fetchIp;
