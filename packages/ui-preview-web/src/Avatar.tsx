import React from 'react';
import './Avatar.css';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
  src?: string;
  text?: string;
  size?: AvatarSize;
  shape?: AvatarShape;
  bgColor?: string;
  textColor?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onError?: () => void;
  children?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  text,
  size = 'md',
  shape = 'circle',
  bgColor,
  textColor = '#1D2129',
  className,
  onClick,
  onError,
  children
}) => {
  const style: React.CSSProperties = {};
  if (bgColor) style.background = bgColor;
  return (
    <div
      className={`ui-avatar ui-avatar--${size} ui-avatar--${shape} ${className || ''}`}
      style={style}
      onClick={onClick}
    >
      {src ? (
        <img className="ui-avatar__img" src={src} alt="" onError={onError} />
      ) : text ? (
        <span className="ui-avatar__text" style={{ color: textColor }}>{text}</span>
      ) : (
        children
      )}
    </div>
  );
};