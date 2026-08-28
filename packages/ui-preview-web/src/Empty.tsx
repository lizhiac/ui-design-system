import React from 'react';
import './Empty.css';

export type EmptyType = 'default' | 'error' | 'search' | 'network';

export interface EmptyProps {
  image?: string;
  description?: string;
  imageSize?: number;
  type?: EmptyType;
  className?: string;
  children?: React.ReactNode;
}

export const Empty: React.FC<EmptyProps> = ({
  image,
  description = '暂无数据',
  imageSize = 100,
  type = 'default',
  className,
  children
}) => {
  return (
    <div className={`ui-empty ${className || ''}`}>
      {image ? (
        <img className="ui-empty__image" src={image} alt="" style={{ width: imageSize, height: imageSize }} />
      ) : (
        <div className={`ui-empty__image ui-empty__image--${type}`} style={{ width: imageSize, height: imageSize }}>
          <span className={`ui-empty__icon ui-empty__icon--${type}`} />
        </div>
      )}
      {description && <div className="ui-empty__desc">{description}</div>}
      {children}
    </div>
  );
};