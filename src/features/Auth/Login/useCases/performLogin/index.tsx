import { useEffect } from 'react';
import AuthEmailInput from '@/features/Auth/components/AuthEmailInput';
import AuthForm from '@/features/Auth/components/AuthForm';
import AuthPasswordInput from '@/features/Auth/components/AuthPasswordInput';
import { useLoginFunctional } from './LoginFunctional';

const LoginPage = () => {
  const {
    emailProps: { emailText, handleEmailBlur, handleEmailChange, handleEmailFocus, isEmailValid },
    handleSubmit,
    isError,
    isLoading,
    passwordProps: { handlePasswordBlur, handlePasswordChange, handlePasswordFocus, isPasswordValid, passwordText },
  } = useLoginFunctional();

  useEffect(() => {
    document.title = 'Sign In';
  }, []);

  return (
    <AuthForm
      title="Welcome back"
      buttonText="Log In"
      onSubmit={handleSubmit}
      isError={isError}
      isLoading={isLoading}
      isValid={isEmailValid && isPasswordValid && emailText && passwordText ? true : false}
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
