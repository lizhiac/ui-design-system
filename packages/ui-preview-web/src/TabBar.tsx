import React from 'react';
import './TabBar.css';

export interface TabItem {
  key: string;
  label: string;
  icon?: React.ReactNode;
  activeIcon?: React.ReactNode;
  badge?: number | string;
  dot?: boolean;
  onClick?: () => void;
}

export interface TabBarProps {
  items: TabItem[];
  activeKey: string;
  color?: string;
  activeColor?: string;
  background?: string;
  fixed?: boolean;
  border?: boolean;
  onChange?: (item: TabItem) => void;
}

export const TabBar: React.FC<TabBarProps> = ({
  items,
  activeKey,
  color,
  activeColor,
  background,
  fixed = true,
  border = true,
  onChange
}) => {
  const handleClick = (item: TabItem) => {
    onChange?.(item);
    item.onClick?.();
  };

  return (
    <nav
      className={`ui-tabbar ${fixed ? 'ui-tabbar--fixed' : ''}`}
      style={{ background: background || 'var(--color-bg-card)' }}
    >
      {border && <div className="ui-tabbar__border" />}
      <div className="ui-tabbar__items">
        {items.map((item) => {
          const isActive = item.key === activeKey;
          const labelColor = isActive
            ? (activeColor || 'var(--color-brand-primary)')
            : (color || 'var(--color-text-secondary)');
          return (
            <button
              key={item.key}
              className={`ui-tabbar__item ${isActive ? 'ui-tabbar__item--active' : ''}`}
              onClick={() => handleClick(item)}
            >
              <div className="ui-tabbar__icon-wrap">
                <span className="ui-tabbar__icon">{isActive && item.activeIcon ? item.activeIcon : item.icon}</span>
                {item.badge !== undefined && item.badge !== '' && (
                  <span className="ui-tabbar__badge">{item.badge}</span>
                )}
                {item.dot && <span className="ui-tabbar__dot" />}
              </div>
              <span className="ui-tabbar__label" style={{ color: labelColor }}>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};