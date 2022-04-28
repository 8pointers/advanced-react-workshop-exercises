const motd = (messages) => () => messages[Math.floor(messages.length * Math.random())];

export default motd;
