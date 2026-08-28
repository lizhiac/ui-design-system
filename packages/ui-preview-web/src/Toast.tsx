import React, { useState, useImperativeHandle, forwardRef } from 'react';
import './Toast.css';

export type ToastType = 'text' | 'success' | 'fail' | 'loading' | 'warning';
export type ToastPosition = 'top' | 'middle' | 'bottom';

export interface ToastProps {
  message?: string;
  type?: ToastType;
  duration?: number;
  position?: ToastPosition;
  mask?: boolean;
}

export interface ToastRef {
  show: (opts: ToastProps) => void;
  clear: () => void;
}

export const Toast = forwardRef<ToastRef, ToastProps>((_, ref) => {
  const [state, setState] = useState<{ show: boolean; message: string; type: ToastType; duration: number; position: ToastPosition; mask: boolean }>({
    show: false, message: '', type: 'text', duration: 2000, position: 'middle', mask: false
  });

  let timer: ReturnType<typeof setTimeout> | null = null;

  useImperativeHandle(ref, () => ({
    show(opts) {
      if (timer) clearTimeout(timer);
      setState({ show: true, message: '', type: 'text', duration: 2000, position: 'middle', mask: false, ...opts });
      if (opts.duration !== 0) {
        timer = setTimeout(() => setState(s => ({ ...s, show: false })), opts.duration ?? 2000);
      }
    },
    clear() {
      if (timer) clearTimeout(timer);
      setState(s => ({ ...s, show: false }));
    }
  }));

  if (!state.show) return null;

  return (
    <div className={`ui-toast-mask ${state.mask ? 'ui-toast-mask--active' : ''}`}>
      <div className={`ui-toast ui-toast--${state.position} ui-toast--${state.type}`}>
        {state.type === 'loading' && <span className="ui-toast__spinner" />}
        {(state.type === 'success' || state.type === 'fail' || state.type === 'warning') && (
          <span className={`ui-toast__icon ui-toast__icon--${state.type}`} />
        )}
        {state.message && <span className="ui-toast__message">{state.message}</span>}
      </div>
    </div>
  );
});
Toast.displayName = 'Toast';