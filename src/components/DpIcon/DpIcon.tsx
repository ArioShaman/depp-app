import './DpIcon.less';

import type { ComponentType, SVGProps } from 'react';

export type IconSize = 24 | 28 | 32 | 36 | 40;

export interface DpIconProps extends SVGProps<SVGSVGElement> {
  name: string;
  size?: IconSize;
}

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

const icons = import.meta.glob<IconComponent>(
  '../../assets/icons/*/*.svg',
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
  const path = `../../assets/icons/${size}/${name}.svg`;
  console.log(path);

  const Icon = icons[path];

  if (!Icon) {
    return null;
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