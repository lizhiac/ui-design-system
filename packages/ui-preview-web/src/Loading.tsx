import React from 'react';
import './Loading.css';

export type LoadingType = 'spinner' | 'circular' | 'dot';
export type LoadingSize = 'sm' | 'md' | 'lg';

export interface LoadingProps {
  type?: LoadingType;
  size?: LoadingSize;
  color?: string;
  text?: string;
  vertical?: boolean;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  type = 'spinner',
  size = 'md',
  color,
  text,
  vertical = false,
  className
}) => {
  const cls = [
    'ui-loading',
    `ui-loading--${type}`,
    `ui-loading--${size}`,
    vertical ? 'ui-loading--vertical' : '',
    className || ''
  ].filter(Boolean).join(' ');

  return (
    <div className={cls} style={color ? { color } : undefined}>
      {type === 'spinner' && <span className="ui-loading__spinner" />}
      {type === 'circular' && (
        <span className="ui-loading__circular">
          <span style={{ '--i': 0 } as React.CSSProperties} />
          <span style={{ '--i': 1 } as React.CSSProperties} />
          <span style={{ '--i': 2 } as React.CSSProperties} />
          <span style={{ '--i': 3 } as React.CSSProperties} />
        </span>
      )}
      {type === 'dot' && (
        <span className="ui-loading__dot">
          <span style={{ '--i': 0 } as React.CSSProperties} />
          <span style={{ '--i': 1 } as React.CSSProperties} />
          <span style={{ '--i': 2 } as React.CSSProperties} />
        </span>
      )}
      {text && <span className="ui-loading__text">{text}</span>}
    </div>
  );
};