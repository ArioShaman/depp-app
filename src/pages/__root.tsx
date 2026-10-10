import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

function RootLayout() {
  return (
    <div>
      <header>
        <h1>Space Explorer</h1>

        <nav>
          <Link to="/">Dashboard</Link>
          {' | '}
          <Link to="/launches">Launches</Link>
          {' | '}
          <Link to="/rockets">Rockets</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export const Route = createRootRoute({
  component: RootLayout,
});
