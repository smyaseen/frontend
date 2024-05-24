import useInputState from '@/features/Auth/hooks/useInputState';
import { useSignUp } from './signup.repository.service';

export function useSignUpFunctional() {
  const {
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
    handleFocus: handleEmailFocus,
    isValid: isEmailValid,
    text: emailText,
  } = useInputState({
    validateOnBlur: true,
    validateOnChange: true,
    validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  });

  const {
    handleBlur: handlePasswordBlur,
    handleChange: handlePasswordChange,
    handleFocus: handlePasswordFocus,
    isValid: isPasswordValid,
    text: passwordText,
  } = useInputState({
    validateOnBlur: true,
    validateOnChange: true,
    validationRegex: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  });

  const {
    handleBlur: handleFullNameBlur,
    handleChange: handleFullNameChange,
    handleFocus: handleFullNameFocus,
    isValid: isFullNameValid,
    text: fullNameText,
  } = useInputState({
    validateOnBlur: true,
    validateOnChange: true,
    validationRegex: /^[a-zA-Z]+ [a-zA-Z]+$/,
  });

  const { error, isError, isPending, mutate } = useSignUp();

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid) {
      mutate({ email: emailText, name: fullNameText, password: passwordText });
    }
  };

  return {
    emailProps: {
      emailText,
      handleEmailBlur,
      handleEmailChange,
      handleEmailFocus,
      isEmailValid,
    },
    error: error as { status: number; success: boolean } | null,
    fullNameProps: {
      fullNameText,
      handleFullNameBlur,
      handleFullNameChange,
      handleFullNameFocus,
      isFullNameValid,
    },
    handleSubmit,
    isError,
    isLoading: isPending,
    passwordProps: {
      handlePasswordBlur,
      handlePasswordChange,
      handlePasswordFocus,
      isPasswordValid,
      passwordText,
    },
  };
}
