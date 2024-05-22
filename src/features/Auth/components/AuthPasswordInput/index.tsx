import { Input, InputProps } from '@nextui-org/react';
import { useState } from 'react';

interface IAuthPasswordInput {
  isValid: boolean;
  value: InputProps['value'];
  onBlur: InputProps['onBlur'];
  onChange: InputProps['onChange'];
  onFocus: InputProps['onFocus'];
}

const AuthPasswordInput: React.FC<IAuthPasswordInput> = ({ isValid, ...props }: IAuthPasswordInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setIsPasswordVisible(!isPasswordVisible);

  return (
    <Input
      classNames={{
        inputWrapper: `${!isValid && !props.value ? '!border-[#F26838]' : ''}`,
      }}
      variant="underlined"
      type={isPasswordVisible ? 'text' : 'password'}
      label="Password"
      minLength={8}
      validate={value => {
        if (!value) return 'Password is required';

        if (value.length < 8)
          return 'Please lengthen this text to 8 characters or more (you are currently using 3 characters)';

        if (!/(?=.*[A-Z])/.test(value)) return 'Password must contain at least one uppercase letter';

        if (!/(?=.*[a-z])/.test(value)) return 'Password must contain at least one lowercase letter';

        if (!/(?=.*\d)/.test(value)) return 'Password must contain at least one number';

        return '';
      }}
      {...props}
      endContent={
        <button
          className="m-auto text-[0.625rem] text-[#A1A1AA] underline"
          onClick={togglePasswordVisibility}
          type="button"
        >
          {isPasswordVisible ? 'Hide' : 'Show'}
        </button>
      }
    />
  );
};

export default AuthPasswordInput;
