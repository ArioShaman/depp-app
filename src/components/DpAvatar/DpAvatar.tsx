import { useState } from 'react';
import './DpAvatar.less';
import { getAvatarClass } from '@components/DpAvatar/color-class';

type DpAvatarSize = 20 | 24 | 28 | 40 | 48 | 96;
interface DpAvatarProps {
  size?: DpAvatarSize;
  skeleton?: boolean;
  src?: string;
  children?: string
}

export function DpAvatar({
  size = 24,
  skeleton = false,
  src,
  children,
}: DpAvatarProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [avatarClass] = useState(() => getAvatarClass());
  const name = (children || '').trim();

  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => [...part][0])
    .join('')
    .toLocaleUpperCase();

  return (
    <div
      className={`dp-avatar dp-avatar--color_${avatarClass} dp-avatar--size_${size} ${skeleton ? 'dp-avatar--skeleton' :''}`}
    >
      {src && (
        <img
          src={src}
          alt={name}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(false)}
        />
      )}

      {!imageLoaded ? initials : null }
    </div>
  )
}