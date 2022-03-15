const login = (username, password, rememberMe) => {
  console.log('Login', username, password.replace(/./g, '*'), rememberMe);
  if (rememberMe) {
    localStorage.setItem('username', username);
  }
};

export default login;
