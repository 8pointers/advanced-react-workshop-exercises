const motd =
  (random = Math.random) =>
  (messages) =>
  () =>
    messages[Math.floor(messages.length * random())];

export default motd;
