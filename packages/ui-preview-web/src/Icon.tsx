import React from 'react';
import './Icon.css';

export type IconName =
  | 'arrow-left' | 'arrow-right' | 'arrow-up' | 'arrow-down'
  | 'close' | 'check' | 'search' | 'plus' | 'minus'
  | 'home' | 'user' | 'heart' | 'star' | 'bell'
  | 'info' | 'warning' | 'success' | 'error';
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconProps {
  name: IconName | string;
  size?: IconSize;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 'md',
  color,
  className,
  onClick
}) => {
  return (
    <span
      className={`ui-icon ui-icon--${size} ${className || ''}`}
      style={{ color: color || 'inherit' }}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      <i className={`ui-icon__glyph ui-icon__glyph--${name}`} />
    </span>
  );
};