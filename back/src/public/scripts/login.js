// Login user
document.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.matches('#login-btn')) {
    const emailInput = document.getElementById('email-input');
    const pwdInput = document.getElementById('pwd-input');
    const data = {
      email: emailInput.value,
      password: pwdInput.value,
    };
    Http
      .post('/api/auth/login', data)
      .then(() => {
        window.location.href = '/users';
      });
  }
}, false);
