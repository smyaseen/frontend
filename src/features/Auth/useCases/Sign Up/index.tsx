import { Input } from '@nextui-org/react';
import { useEffect } from 'react';
import AuthEmailInput from '../../components/AuthEmailInput';
import AuthForm from '../../components/AuthForm';
import AuthPasswordInput from '../../components/AuthPasswordInput';
import useInputState from '../../hooks/useInputState';

const SignUpPage = () => {
  useEffect(() => {
    document.title = 'Sign Up';
  }, []);

  const handleSubmit = () => {
    // handle sign up...
  };
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

  return (
    <AuthForm
      title="Start creating courses now"
      buttonText="Sign Up"
      onSubmit={handleSubmit}
    >
      <AuthEmailInput
        isValid={isEmailValid}
        onBlur={handleEmailBlur}
        onChange={handleEmailChange}
        onFocus={handleEmailFocus}
        value={emailText}
      />

      <Input
        variant="underlined"
        label="Full Name"
        type="text"
        validate={val => {
          if (val.split(' ').length < 2) {
            return 'Full name should include your first and last names';
          }

          return '';
        }}
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

export default SignUpPage;
