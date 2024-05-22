import { ChangeEvent, useState } from 'react';

interface InputState {
  handleBlur: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFocus: () => void;
  isFocused: boolean;
  isValid: boolean;
  text: string;
}

interface InputProp {
  validateOnBlur?: boolean;
  validateOnChange?: boolean;
  validationRegex?: RegExp;
}

const useInputState = (inputProp?: InputProp): InputState => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (inputProp?.validateOnBlur) validateText(text);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
    if (inputProp?.validateOnChange) validateText(inputValue);
  };

  const validateText = (inputValue: string) => {
    if (inputProp?.validationRegex) {
      setIsValid(inputProp?.validationRegex.test(inputValue));
    }
  };

  return {
    handleBlur,
    handleChange,
    handleFocus,
    isFocused,
    isValid,
    text,
  };
};

export default useInputState;
