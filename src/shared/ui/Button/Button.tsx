import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import cls from './Button.module.css';
import clsx from 'clsx';
import { Edit } from '../Icons/Edit';
import { Delete } from '../Icons/Delete';

export type ButtonThemes = 'black' | 'green' | 'red' | 'edit' | 'delete' | 'none';

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
  delete: cls.delete,
  none: cls.none,
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, onClick, extraClasses, theme = 'black', isActive = false, ...props }, ref) => {
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
      <button ref={ref} onClick={onClick} className={clsx(cls.btn, THEMES[theme], mods, extraClasses)} {...props}>
        {renderChildren()}
      </button>
    );
  }
);
