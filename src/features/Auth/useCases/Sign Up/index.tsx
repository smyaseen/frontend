import './style.css';
import { Button, Checkbox, Image, Input, Link } from '@nextui-org/react';
import { useEffect } from 'react';

const SignUpPage = () => {
  useEffect(() => {
    document.title = 'Sign Up';
  }, []);

  return (
    <div className="animate-fade-down flex flex-col gap-14">
      <div className="flex w-full max-w-96 flex-col justify-center gap-6">
        <p className="text-center text-[2rem] font-semibold">Start creating courses now</p>

        <div className="flex flex-col gap-4">
          <Input
            variant="underlined"
            label="Business Email"
            // placeholder="name@yourcompany.com"
            type="email"
          />

          <Input
            variant="underlined"
            label="Password"
            type="password"
          />
        </div>

        <div className="flex flex-row justify-between">
          <Checkbox
            radius="none"
            defaultSelected
            size="sm"
            classNames={{
              label: 'text-[#73899e]',
            }}
          >
            Keep me logged in
          </Checkbox>

          <Link
            underline="hover"
            className="cursor-pointer text-sm text-[#73899e]"
          >
            Forgot password?
          </Link>
        </div>

        <Button
          variant="flat"
          radius="full"
          className="login-button h-[3.75rem] bg-[#363e4e] text-base font-medium text-[#fff] hover:bg-[#2f3640]"
        >
          Log in
        </Button>

        <Link
          className="justify-center text-sm text-[#5ebeff]"
          underline="hover"
          href="https://www.easygenerator.com/en/eula/"
        >
          End User License Agreement (EULA)
        </Link>
      </div>

      <div className="flex flex-row items-center justify-center gap-2">
        <Image src="/lock.svg" />
        <p className="text-center text-sm text-[#c3cad7]">Easygenerator stores your data in the European Union</p>
      </div>
    </div>
  );
};

export default SignUpPage;
