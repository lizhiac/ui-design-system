import React from 'react';
import './Navbar.css';

export interface NavbarProps {
  title?: string;
  showBack?: boolean;
  showHome?: boolean;
  background?: string;
  textColor?: string;
  fixed?: boolean;
  transparent?: boolean;
  leftText?: string;
  rightText?: string;
  onBack?: () => void;
  onHome?: () => void;
  onLeftTap?: () => void;
  onRightTap?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  title = '',
  showBack = true,
  showHome = false,
  background,
  textColor,
  fixed = false,
  transparent = false,
  leftText,
  rightText,
  onBack,
  onHome,
  onLeftTap,
  onRightTap
}) => {
  const style: React.CSSProperties = {
    background: transparent ? 'transparent' : (background || 'var(--color-brand-primary)'),
    color: textColor || 'var(--color-text-primary)'
  };

  return (
    <header
      className={`ui-navbar ${fixed ? 'ui-navbar--fixed' : ''} ${transparent ? 'ui-navbar--transparent' : ''}`}
      style={style}
    >
      <div className="ui-navbar__statusbar" />
      <div className="ui-navbar__content">
        <div className="ui-navbar__left">
          {showBack && (
            <button className="ui-navbar__btn" onClick={onBack} aria-label="返回">
              <span className="ui-navbar__arrow-left" />
            </button>
          )}
          {showHome && (
            <button className="ui-navbar__btn" onClick={onHome} aria-label="首页">
              <span className="ui-navbar__home" />
            </button>
          )}
          {leftText && (
            <span className="ui-navbar__text-btn" onClick={onLeftTap}>{leftText}</span>
          )}
        </div>

        <h1 className="ui-navbar__title">{title}</h1>

        <div className="ui-navbar__right">
          {rightText && (
            <span className="ui-navbar__text-btn" onClick={onRightTap}>{rightText}</span>
          )}
        </div>
      </div>
    </header>
  );
};