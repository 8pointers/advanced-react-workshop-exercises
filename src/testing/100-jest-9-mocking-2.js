const login = (logger, storage) => (username, password, rememberMe) => {
  logger.log('Login', username, password.replace(/./g, '*'), rememberMe);
  if (rememberMe) {
    storage.setItem('username', username);
  }
};

export default login;
