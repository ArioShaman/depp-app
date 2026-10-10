import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { DpIcon } from '@components/DpIcon';

import './DpInlineButton.less';

type DpInlineButtonAppearance =
  | 'bezeled'
  | 'plain'
  | 'gray';

interface DpInlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  appearance?: DpInlineButtonAppearance;
  loading?: boolean;
  children?: ReactNode;
  iconStart?: string;
  iconEnd?: string;
}


export function DpInlineButton({
  appearance = 'bezeled',
  loading = false,
  children,
  iconStart,
  iconEnd,
  ...buttonProps
}: DpInlineButtonProps) {
  return (
    <button
      {...buttonProps}
      className={`dp-inline-button dp-inline-button--${appearance}`}
      disabled={loading || buttonProps.disabled}
    >
      {
        iconStart ? 
          <DpIcon name={iconStart} size={24}/>
        : null
      }

      {children}

      {
        iconEnd ? 
          <DpIcon name={iconEnd} size={24}/>
        : null
      }
    </button>
  );
}
