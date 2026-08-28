import React, { useState, useRef } from 'react';
import './PullRefresh.css';

export interface PullRefreshProps {
  pullDistance?: number;
  refreshText?: string;
  pullingText?: string;
  loosingText?: string;
  loadingText?: string;
  successText?: string;
  successDuration?: number;
  onRefresh?: () => Promise<boolean> | boolean | void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

type Status = 'normal' | 'pulling' | 'loosing' | 'loading' | 'success';

export const PullRefresh: React.FC<PullRefreshProps> = ({
  pullDistance = 60,
  refreshText = '下拉刷新',
  pullingText = '继续下拉',
  loosingText = '释放立即刷新',
  loadingText = '正在刷新...',
  successText = '刷新成功',
  successDuration = 500,
  onRefresh,
  disabled = false,
  className,
  children
}) => {
  const [status, setStatus] = useState<Status>('normal');
  const [moveY, setMoveY] = useState(0);
  const startY = useRef(0);

  const onTouchStart = (e: React.TouchEvent) => {
    if (disabled || status === 'loading') return;
    startY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (disabled || status === 'loading') return;
    const dy = e.touches[0].clientY - startY.current;
    if (dy <= 0) return;
    const damping = 0.4;
    const y = Math.min(dy * damping, pullDistance * 1.5);
    setMoveY(y);
    setStatus(y >= pullDistance ? 'loosing' : 'pulling');
  };

  const onTouchEnd = async () => {
    if (disabled || status === 'loading') return;
    if (status === 'loosing') {
      setStatus('loading');
      setMoveY(pullDistance);
      try {
        const result = await onRefresh?.();
        if (result === false) {
          setStatus('normal');
          setMoveY(0);
        } else {
          setStatus('success');
          setTimeout(() => {
            setStatus('normal');
            setMoveY(0);
          }, successDuration);
        }
      } catch {
        setStatus('normal');
        setMoveY(0);
      }
    } else {
      setStatus('normal');
      setMoveY(0);
    }
  };

  return (
    <div
      className={`ui-pull-refresh ${className || ''}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="ui-pull-refresh__header"
        style={{ height: pullDistance, transform: `translateY(${moveY - pullDistance}px)` }}
      >
        <div className="ui-pull-refresh__indicator">
          {(status === 'normal' || status === 'pulling') && (
            <>
              <span className={`ui-pull-refresh__arrow ${status === 'pulling' ? 'ui-pull-refresh__arrow--up' : ''}`} />
              <span>{status === 'pulling' ? pullingText : refreshText}</span>
            </>
          )}
          {status === 'loosing' && (
            <>
              <span className="ui-pull-refresh__arrow ui-pull-refresh__arrow--up" />
              <span>{loosingText}</span>
            </>
          )}
          {status === 'loading' && (
            <>
              <span className="ui-pull-refresh__spinner" />
              <span>{loadingText}</span>
            </>
          )}
          {status === 'success' && (
            <>
              <span className="ui-pull-refresh__success" />
              <span>{successText}</span>
            </>
          )}
        </div>
      </div>
      <div
        className="ui-pull-refresh__content"
        style={{
          transform: `translateY(${moveY}px)`,
          transition: status === 'loading' ? 'transform 0.2s' : 'none'
        }}
      >
        {children}
      </div>
    </div>
  );
};