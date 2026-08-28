import React from 'react';
import './Cell.css';

export interface CellProps {
  title?: string;
  label?: string;
  value?: string;
  icon?: React.ReactNode;
  arrow?: boolean;
  border?: boolean;
  isLink?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  right?: React.ReactNode;
}

export const Cell: React.FC<CellProps> = ({
  title,
  label,
  value,
  icon,
  arrow = false,
  border = true,
  isLink = false,
  className,
  onClick,
  right
}) => {
  const cls = [
    'ui-cell',
    border ? 'ui-cell--border' : '',
    isLink ? 'ui-cell--link' : '',
    className || ''
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} onClick={isLink ? onClick : undefined}>
      {icon && <div className="ui-cell__icon">{icon}</div>}
      <div className="ui-cell__body">
        {title && <div className="ui-cell__title">{title}</div>}
        {label && <div className="ui-cell__label">{label}</div>}
      </div>
      {value && <div className="ui-cell__value">{value}</div>}
      {right}
      {(arrow || isLink) && <i className="ui-cell__arrow" />}
    </div>
  );
};