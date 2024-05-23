import useInputState from '@/features/Auth/hooks/useInputState';
import { useSignUp } from './SignUpRepositoryService';

export function useSignUpFunctional() {
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

  const {
    handleBlur: handleFullNameBlur,
    handleChange: handleFullNameChange,
    handleFocus: handleFullNameFocus,
    isValid: isFullNameValid,
    text: fullNameText,
  } = useInputState({
    validateOnBlur: true,
    validationRegex: /^[a-zA-Z]+ [a-zA-Z]+$/,
  });

  const { isError, isPending, mutate } = useSignUp();

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid) {
      mutate({ email: emailText, fullName: fullNameText, password: passwordText });
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
