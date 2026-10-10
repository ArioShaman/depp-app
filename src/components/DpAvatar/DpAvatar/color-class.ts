const AVATAR_CLASSES = [
  'lime',
  'lavender',
  'pink',
  'blue',
  'mint',
  'peach',
  'yellow',
  'coral',
  'cyan',
  'lilac'
] as const;

export function getAvatarClass(): string {
  const index = Math.floor(Math.random() * AVATAR_CLASSES.length);

  return AVATAR_CLASSES[index];
}