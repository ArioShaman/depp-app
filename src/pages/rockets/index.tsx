import { createFileRoute } from '@tanstack/react-router';

function RocketsPage() {
  return <h2>Rockets</h2>;
}

export const Route = createFileRoute('/rockets/')({
  component: RocketsPage,
});
