import { Input } from '@nextui-org/react';
import { Helmet } from 'react-helmet';
import AuthEmailInput from '@/features/Auth/components/AuthEmailInput';
import AuthForm from '@/features/Auth/components/AuthForm';
import AuthPasswordInput from '@/features/Auth/components/AuthPasswordInput';
import { useSignUpFunctional } from './SignUpFunctional';

const SignUpPage = () => {
  const {
    emailProps: { emailText, handleEmailBlur, handleEmailChange, handleEmailFocus, isEmailValid },
    fullNameProps: { fullNameText, handleFullNameBlur, handleFullNameChange, handleFullNameFocus, isFullNameValid },
    handleSubmit,
    isError,
    isLoading,
    passwordProps: { handlePasswordBlur, handlePasswordChange, handlePasswordFocus, isPasswordValid, passwordText },
  } = useSignUpFunctional();

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <AuthForm
        title="Start creating courses now"
        buttonText="Sign Up"
        onSubmit={handleSubmit}
        isError={isError}
        isLoading={isLoading}
        isValid={
          isEmailValid && isPasswordValid && isFullNameValid && emailText && passwordText && fullNameText ? true : false
        }
        type="signup"
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
          value={fullNameText}
          onBlur={handleFullNameBlur}
          onChange={handleFullNameChange}
          onFocus={handleFullNameFocus}
          validate={val => {
            if (val.trim().split(' ').length < 2) {
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
    </>
  );
};

export default SignUpPage;
