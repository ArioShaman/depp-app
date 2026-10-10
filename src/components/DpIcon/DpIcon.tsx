import './DpIcon.less';

import type { ComponentType, SVGProps } from 'react';

export type DpIconSize = 24 | 28 | 32 | 36 | 40;

export interface DpIconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: DpIconSize;
}

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const icons = import.meta.glob<IconComponent>(
  '../../assets/icons/*.svg',
  {
    eager: true,
    query: '?react',
    import: 'default',
  },
);

export function DpIcon({
  name,
  size = 24,
  className,
  ...props
}: DpIconProps) {
  const path = `../../assets/icons/${name}.svg`;
  const Icon = icons[path];

  if (!Icon) {
    return <div>NF</div>;
  }

  return (
    <Icon
      className={className}
      width={size}
      height={size}
      {...props}
    />
  );
}