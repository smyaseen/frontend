import './style.css';
import { Button, Checkbox, Image, Input, Link } from '@nextui-org/react';
import { useEffect } from 'react';

const LoginPage = () => {
  useEffect(() => {
    document.title = 'Sign In';
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-14 px-4 pb-0 pt-10">
        <div className="flex w-full flex-row justify-between">
          <Image
            src="/logo.svg"
            alt="NextUI"
            className="hidden sm:block"
          />
          <Image
            src="/logo-sm.svg"
            alt="NextUI"
            className="block sm:hidden"
          />
          <div className="flex flex-row items-center gap-4">
            <p className="hidden text-sm text-[#848fa3] sm:block">Don’t have an account?</p>
            <Button
              variant="bordered"
              radius="full"
              className="h-[2.6rem] w-[9.5rem] border-1 border-[#eaedf1] font-medium text-[#363e4e]"
            >
              Sign up
            </Button>
          </div>
        </div>

        <div className="flex w-full max-w-96 flex-col justify-center gap-6">
          <p className="text-center text-[2rem] font-semibold">Welcome Back</p>

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
    </>
  );
};

export default LoginPage;
