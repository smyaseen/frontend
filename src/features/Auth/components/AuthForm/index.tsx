import './style.css';
import { Button, Image, Link } from '@nextui-org/react';

interface IAuthForm {
  buttonText: string;
  onSubmit: () => void;
  title: string;
  children: React.ReactNode;
  isError?: boolean;
  isLoading?: boolean;
  isValid?: boolean;
  type: 'signin' | 'signup';
  error: { status: number; success: boolean } | null;
}

const AuthForm = ({ buttonText, children, error, isError, isLoading, isValid, onSubmit, title, type }: IAuthForm) => (
  <div className="flex animate-fade-down flex-col gap-14">
    <div className="flex w-full max-w-96 flex-col justify-center gap-6">
      <p className="text-center text-[2rem] font-semibold">{title}</p>

      <div className="flex flex-col gap-4">{children}</div>

      <Button
        variant="flat"
        radius="full"
        data-testid="submit"
        className={`${type === 'signin' ? 'login-button' : 'sign-up-button'} h-[3.75rem]  text-base font-medium text-[#fff]`}
        onClick={onSubmit}
        // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
        isDisabled={isLoading || !isValid}
        isLoading={isLoading}
      >
        {buttonText}
      </Button>

      {isError && error && (
        <p className="text-center text-sm text-[#ff4d4f]">
          {error.status === 401 ? 'Invalid email or password' : 'Something went wrong, please try again later.'}
        </p>
      )}

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

export default AuthForm;
