import './style.css';
import { Button, Image, Link } from '@nextui-org/react';

interface IAuthForm {
  buttonText: string;
  onSubmit: () => void;
  title: string;
  children: React.ReactNode;
}

const AuthForm = ({ buttonText, children, onSubmit, title }: IAuthForm) => (
  <div className="flex animate-fade-down flex-col gap-14">
    <div className="flex w-full max-w-96 flex-col justify-center gap-6">
      <p className="text-center text-[2rem] font-semibold">{title}</p>

      <div className="flex flex-col gap-4">{children}</div>

      <Button
        variant="flat"
        radius="full"
        className="login-button h-[3.75rem] bg-[#363e4e] text-base font-medium text-[#fff] hover:bg-[#2f3640]"
        onClick={onSubmit}
      >
        {buttonText}
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

export default AuthForm;
