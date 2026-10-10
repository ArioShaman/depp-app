import { createFileRoute } from '@tanstack/react-router';

function LaunchesPage() {
  return <h2>Launches</h2>;
}

export const Route = createFileRoute('/launches/')({
  component: LaunchesPage,
});
