import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.css';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick: () => void;
  extraClasses?: string;
  theme?: 'black' | 'green' | 'red';
}

const Button = ({ children, onClick, extraClasses, theme = 'black', ...props }: ButtonProps) => {
  const mods = {
    black: cls.black,
    green: cls.green,
    red: cls.red,
  };

  return (
    <button onClick={onClick} className={clsx(cls.btn, mods[theme], extraClasses)} {...props}>
      {children}
    </button>
  );
};

export default Button;
