const motd = (messages, random) => () =>
  messages[Math.floor(messages.length * random())];

export default motd;
