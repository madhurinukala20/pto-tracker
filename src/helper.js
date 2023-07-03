export const invalidPasswordText =
  'Password should have atleast 1 caps, 1 small, 1 special character and length 8 characters!';
export const invalidUsernameText = 'Invalid username';

export const validatePassword = (password) => {
  const haveCaps = /[A-Z]/.test(password);
  const haveSmall = /[a-z]/.test(password);
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  const haveSpecial = format.test(password);
  const haveEightChars = password.length >= 8;
  const validPassword = haveCaps && haveSmall && haveSpecial && haveEightChars;
  return validPassword;
};

export const validUsername = (username) => {
  const users = ['admin', 'madhuri', 'tulasi'];
  return users.includes(username);
};

export const resetForm = (e, field1, field2, field3) => {
  e.preventDefault();
  if (field1) {
    field1('');
  }
  if (field2) {
    field2('');
  }
  if (field3) {
    field3('');
  }
};
