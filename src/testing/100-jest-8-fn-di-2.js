const motd = (rng) => (messages) => () => messages[rng(0, messages.length)];

export default motd;
