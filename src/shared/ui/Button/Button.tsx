import { ButtonHTMLAttributes, ReactNode } from 'react';
import cls from './Button.module.css';
import clsx from 'clsx';
import { Edit } from '../Icons/Edit';
import { Delete } from '../Icons/Delete';

export type ButtonThemes = 'black' | 'green' | 'red' | 'edit' | 'delete';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  onClick?: () => void;
  extraClasses?: string;
  theme?: ButtonThemes;
  isActive?: boolean;
}

const THEMES: Record<ButtonThemes, string> = {
  black: cls.black,
  green: cls.green,
  red: cls.red,
  edit: cls.edit,
  delete: cls.delete
};

export const Button = ({
  children,
  onClick,
  extraClasses,
  theme = 'black',
  isActive = false,
  ...props
}: ButtonProps) => {
  const mods = {
    [cls.active]: isActive,
  };

  const renderChildren = () => {
    if (children) {
      return children;
    } else if (theme === 'edit') {
      return <Edit />;
    } else if (theme === 'delete') {
      return <Delete />;
    }

    return null;
  };

  return (
    <button onClick={onClick} className={clsx(cls.btn, THEMES[theme], mods, extraClasses)} {...props}>
      {renderChildren()}
    </button>
  );
};
