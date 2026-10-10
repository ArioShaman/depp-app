import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { DpIcon } from '@components/DpIcon';

import './DpButton.less';

type DpButtonAppearance =
  | 'fill'
  | 'bezeled'
  | 'plain'
  | 'gray'
  | 'outline'
  | 'white';

type DpButtonSize = 's' | 'm' | 'l';

interface DpButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: DpButtonAppearance;
  size?: DpButtonSize;
  loading?: boolean;
  children: ReactNode;
  iconStart?: string;
  iconEnd?: string;
}


export function DpButton({
  appearance = 'fill',
  size = 'l',
  loading = false,
  children,
  iconStart,
  iconEnd,
  ...buttonProps
}: DpButtonProps) {
  return (
    <button
      {...buttonProps}
      className={`dp-button dp-button--${appearance} dp-button--${size}`}
      disabled={loading || buttonProps.disabled}
    >
      {
        iconStart ? 
          <DpIcon name={iconStart}/>
        : null
      }

      {children}

      {
        iconEnd ? 
          <DpIcon name={iconEnd}/>
        : null
      }
    </button>
  );
}
