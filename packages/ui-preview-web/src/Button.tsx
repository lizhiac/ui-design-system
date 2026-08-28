import React from 'react';
import './Button.css';

export type ButtonType = 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: ButtonType;
  size?: ButtonSize;
  block?: boolean;
  loading?: boolean;
  hairline?: boolean;
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'md',
  block = false,
  loading = false,
  disabled = false,
  hairline = true,
  className,
  children,
  ...rest
}) => {
  const cls = [
    'ui-button',
    `ui-button--${type}`,
    `ui-button--${size}`,
    block ? 'ui-button--block' : '',
    className || ''
  ].filter(Boolean).join(' ');

  return (
    <button className={cls} disabled={disabled || loading} {...rest}>
      {loading && <span className="ui-button__spinner" />}
      {children}
    </button>
  );
};