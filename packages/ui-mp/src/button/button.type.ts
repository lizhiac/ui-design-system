export type ButtonType = 'primary' | 'secondary' | 'ghost' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProp {
  type?: ButtonType;
  size?: ButtonSize;
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
  hairline?: boolean;
  openType?: string;
  hoverClass?: string;
  customClass?: string;
}