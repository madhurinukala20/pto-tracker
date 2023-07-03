import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Input from '@/components/Input';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import { resetForm } from '@/helper';
import {
  invalidPasswordText,
  validatePassword,
  invalidUsernameText,
  validUsername,
} from '@/helper';

function LoginForm(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [errorUsername, setErrorUsername] = useState(null);
  const [errorPassword, setErrorPassword] = useState(null);
  const [disableButton, setDisableButton] = useState(true);

  const formFields = [
    {
      label: 'Username',
      name: 'username',
      type: 'text',
      value: username,
      setValue: setUsername,
      errorMessage: errorUsername,
    },
    {
      label: 'Password',
      name: 'password',
      type: 'password',
      value: password,
      setValue: setPassword,
      errorMessage: errorPassword,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { username: username, password: password };

    if (validatePassword(userData.password)) {
      setErrorPassword(null);
    } else {
      setErrorPassword(invalidPasswordText);
    }

    if (validUsername(userData.username)) {
      setErrorUsername(null);
    } else {
      setErrorUsername(invalidUsernameText);
    }

    if (
      validUsername(userData.username) &&
      validatePassword(userData.password)
    ) {
      localStorage.setItem('userData', JSON.stringify(userData));
      window.location.replace("/dashboard");
    }
  };

  const onChange = (e) => {
    setDisableButton(false);
  };

  return (
    <div className="form__container form__container--login">
      <div className="form__container-box">
        <Logo />
        <form className="form" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <Input key={field.name} field={field} />
          ))}
          <ReCAPTCHA
            sitekey="6LcPS0wmAAAAAE1L_JobdqRoDe22ULRumcZi0b0m"
            onChange={onChange}
          />
          <Button
            data-testid="submit-button"
            type="submit"
            disabled={disableButton}
          >
            Login
          </Button>
        </form>
        <p>
          <span onClick={(e) => resetForm(e, setUsername, setPassword)}>
            Reset
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
