import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
} from 'react';
import type { CSSProperties, ReactNode } from 'react';

import './DpStackedAvatar.less';
import type { DpAvatarProps, DpAvatarSize } from '../DpAvatar';

export type DpStackedAvatarSpacing = 8 | 12 | 16 | 20 | 24;

interface DpStackedAvatarProps {
  children?: ReactNode;
  size?: DpAvatarSize;
  limit?: number;
  spacing?: DpStackedAvatarSpacing;
}

export function DpStackedAvatar({
  children,
  size = 28,
  spacing = 8,
  limit,
}: DpStackedAvatarProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  const avatars = Children.toArray(children);

  const visibleLimit =
    limit === undefined
      ? avatars.length
      : Math.max(0, Math.floor(limit));

  const visibleAvatars = avatars.slice(0, visibleLimit);
  const hiddenCount = avatars.length - visibleAvatars.length;

  const setShifts = (
    activeIdx: number | null,
    phase: 'in' | 'out',
  ) => {
    const root = rootRef.current;
    if (!root) return;

    const styles = getComputedStyle(root);

    const getNumber = (name: string, fallback: number) => {
      const value = Number.parseFloat(styles.getPropertyValue(name));
      return Number.isFinite(value) ? value : fallback;
    };

    const getValue = (name: string, fallback: string) =>
      styles.getPropertyValue(name).trim() || fallback;

    const lift = getNumber('--avatar-lift', -4);
    const falloff = getNumber('--avatar-falloff', 0.45);
    const scale = getNumber('--avatar-scale', 1.05);

    const easing =
      phase === 'out'
        ? getValue(
            '--avatar-ease-out',
            'cubic-bezier(0.34, 3.85, 0.64, 1)',
          )
        : getValue(
            '--avatar-ease-in',
            'cubic-bezier(0.22, 1, 0.36, 1)',
          );

    const elements =
      root.querySelectorAll<HTMLElement>('.dp-stacked-avatar_el');

    elements.forEach((element, index) => {
      element.style.transitionTimingFunction = easing;

      if (activeIdx === null) {
        element.style.setProperty('--shift', '0px');
        element.style.setProperty('--scale-active', '1');
        return;
      }

      const distance = Math.abs(index - activeIdx);

      element.style.setProperty(
        '--shift',
        `${(lift * Math.pow(falloff, distance)).toFixed(3)}px`,
      );

      element.style.setProperty(
        '--scale-active',
        index === activeIdx ? String(scale) : '1',
      );
    });
  };

  return (
    <div
      ref={rootRef}
      className='dp-stacked-avatar'
      style={
        {
          '--avatar-spacing': `-${spacing}px`,
        } as CSSProperties
      }
      onMouseLeave={() => setShifts(null, 'out')}
    >
      {visibleAvatars.map((avatar, index) => {
        const sizedAvatar = isValidElement<DpAvatarProps>(avatar)
          ? cloneElement(avatar, { size })
          : avatar;

        return (
          <div
            key={index}
            className={`dp-stacked-avatar_el dp-stacked-avatar_el__size-${size}`}
            onMouseEnter={() => setShifts(index, 'in')}
          >
            {sizedAvatar}
          </div>
        );
      })}

      {hiddenCount > 0 && (
        <div
          className='dp-stacked-avatar_el'
          onMouseEnter={() =>
            setShifts(visibleAvatars.length, 'in')
          }
          aria-label={`${hiddenCount} дополнительных аватаров`}
        >
          <div
            className={`dp-stacked-avatar_el-counter dp-stacked-avatar_el-counter__size-${size}`}
          >
            +{hiddenCount}
          </div>
        </div>
      )}
    </div>
  );
}