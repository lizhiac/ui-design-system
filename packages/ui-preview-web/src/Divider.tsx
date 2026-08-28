import React from 'react';
import './Divider.css';

export interface DividerProps {
  content?: string;
  dashed?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Divider: React.FC<DividerProps> = ({ content, dashed, className, children }) => {
  return (
    <div className={`ui-divider ${dashed ? 'ui-divider--dashed' : ''} ${className || ''}`}>
      <span className="ui-divider__line ui-divider__line--left" />
      {content ? (
        <span className="ui-divider__content">{content}</span>
      ) : children ? (
        <span className="ui-divider__content">{children}</span>
      ) : null}
      <span className="ui-divider__line ui-divider__line--right" />
    </div>
  );
};