import React from 'react';
import './Tag.css';

export type TagType = 'default' | 'primary' | 'success' | 'warning' | 'danger';
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps {
  type?: TagType;
  size?: TagSize;
  plain?: boolean;
  round?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
  children?: React.ReactNode;
}

export const Tag: React.FC<TagProps> = ({
  type = 'default',
  size = 'md',
  plain = false,
  round = false,
  className,
  onClick,
  children
}) => {
  const cls = [
    'ui-tag',
    `ui-tag--${type}`,
    `ui-tag--${size}`,
    plain ? 'ui-tag--plain' : '',
    round ? 'ui-tag--round' : '',
    className || ''
  ].filter(Boolean).join(' ');

  return (
    <span className={cls} onClick={onClick} role={onClick ? 'button' : undefined}>
      {children}
    </span>
  );
};