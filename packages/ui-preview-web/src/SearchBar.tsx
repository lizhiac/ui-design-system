import React, { useState, useEffect } from 'react';
import './SearchBar.css';

export interface SearchBarProps {
  value?: string;
  placeholder?: string;
  showAction?: boolean;
  actionText?: string;
  disabled?: boolean;
  readonly?: boolean;
  shape?: 'round' | 'square';
  background?: string;
  clearable?: boolean;
  maxLength?: number;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  onCancel?: () => void;
  onClear?: () => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value = '',
  placeholder = '请输入搜索关键词',
  showAction = false,
  actionText = '取消',
  disabled = false,
  readonly = false,
  shape = 'round',
  background,
  clearable = true,
  maxLength,
  onChange,
  onSearch,
  onCancel,
  onClear
}) => {
  const [innerValue, setInnerValue] = useState(value);
  useEffect(() => { setInnerValue(value); }, [value]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setInnerValue(v);
    onChange?.(v);
  };

  const handleClear = () => {
    setInnerValue('');
    onChange?.('');
    onClear?.();
  };

  const handleCancel = () => {
    setInnerValue('');
    onCancel?.();
  };

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onSearch?.(innerValue);
  };

  const showClear = clearable && innerValue && !disabled && !readonly;

  return (
    <div className="ui-searchbar">
      <div
        className={`ui-searchbar__input-wrap ui-searchbar__input-wrap--${shape}`}
        style={background ? { background } : undefined}
      >
        <span className="ui-searchbar__icon">
          <span className="ui-searchbar__icon-circle" />
          <span className="ui-searchbar__icon-line" />
        </span>
        <input
          className="ui-searchbar__input"
          value={innerValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          maxLength={maxLength}
          onChange={handleInput}
          onKeyDown={handleKey}
        />
        {showClear && (
          <button className="ui-searchbar__clear" onClick={handleClear} aria-label="清除">
            <span className="ui-searchbar__clear-icon" />
          </button>
        )}
      </div>
      {showAction && (
        <button className="ui-searchbar__action" onClick={handleCancel}>{actionText}</button>
      )}
    </div>
  );
};