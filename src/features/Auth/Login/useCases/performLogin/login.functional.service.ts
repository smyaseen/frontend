import useInputState from '@/features/Auth/hooks/useInputState';
import { useLogin } from './login.repository.service';

export function useLoginFunctional() {
  const {
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
    handleFocus: handleEmailFocus,
    isValid: isEmailValid,
    text: emailText,
  } = useInputState({ validateOnBlur: true, validateOnChange: true, validationRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ });

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

  const { error, isError, isPending, mutate } = useLogin();

  const handleSubmit = () => {
    if (isEmailValid && isPasswordValid) {
      mutate({ email: emailText, password: passwordText });
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
