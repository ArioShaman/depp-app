
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Rocket } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { ModeToggle } from './mode-toggle';

const navigation = [
  { label: 'Dashboard', to: '/' as const },
  { label: 'Launches', to: '/launches' as const },
  { label: 'Rockets', to: '/rockets' as const },
];

function RootLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 gap-2">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Rocket className="size-5" />
            <span>Space Explorer</span>
          </Link>

          <nav className="flex items-center gap-1">
            {navigation.map((item) => (
              <Button
                key={item.to}
                variant="ghost"
                size="sm"
                render={
                  <Link
                    to={item.to}
                    activeProps={{
                      className: 'bg-accent text-accent-foreground',
                    }}
                  />
                }
              >
                {item.label}
              </Button>
            ))}
          </nav>

          <ModeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
