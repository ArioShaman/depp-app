
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@components/DPThemeProvider';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const nextTheme =
    theme === 'light'
      ? 'dark'
      : 'light'

  const Icon =
    theme === 'light'
      ? Sun
      : Moon;

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label={`Current theme: ${theme}. Switch theme`}
      title={`Theme: ${theme}. Click to switch`}
      onClick={() => setTheme(nextTheme)}
    >
      <Icon className="size-4" />
    </Button>
  );
}
