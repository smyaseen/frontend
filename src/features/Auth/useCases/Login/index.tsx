import { useEffect } from 'react';
import AuthEmailInput from '../../components/AuthEmailInput';
import AuthForm from '../../components/AuthForm';
import AuthPasswordInput from '../../components/AuthPasswordInput';
import useInputState from '../../hooks/useInputState';

const LoginPage = () => {
  const {
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
    handleFocus: handleEmailFocus,
    isValid: isEmailValid,
    text: emailText,
  } = useInputState({ validateOnBlur: true, validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ });

  const {
    handleBlur: handlePasswordBlur,
    handleChange: handlePasswordChange,
    handleFocus: handlePasswordFocus,
    isValid: isPasswordValid,
    text: passwordText,
  } = useInputState({
    validateOnBlur: true,
    validationRegex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  });

  useEffect(() => {
    document.title = 'Sign In';
  }, []);

  const handleSubmit = () => {
    // handle sign up...
  };

  return (
    <AuthForm
      title="Welcome back"
      buttonText="Log In"
      onSubmit={handleSubmit}
    >
      <AuthEmailInput
        isValid={isEmailValid}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        onFocus={handleEmailFocus}
        value={emailText}
      />

      <AuthPasswordInput
        isValid={isPasswordValid}
        onBlur={handlePasswordBlur}
        onChange={handlePasswordChange}
        onFocus={handlePasswordFocus}
        value={passwordText}
      />
    </AuthForm>
  );
};

export default LoginPage;
