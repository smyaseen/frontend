import { Input, InputProps } from '@nextui-org/react';

interface IAuthEmailInput {
  isValid: boolean;
  onBlur: InputProps['onBlur'];
  onChange: InputProps['onChange'];
  onFocus: InputProps['onFocus'];
  value: InputProps['value'];
}

const AuthEmailInput: React.FC<IAuthEmailInput> = ({ isValid, ...props }: IAuthEmailInput) => (
  <Input
    label="Business Email"
    type="email"
    classNames={{
      inputWrapper: `${!isValid ? '!border-[#F26838]' : ''}`,
    }}
    variant="underlined"
    {...props}
  />
);

export default AuthEmailInput;
