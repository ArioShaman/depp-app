import { createFileRoute } from '@tanstack/react-router';
import { useLaunches } from '../../hooks/useLaunches';
import { LaunchesTable } from '@widgets/launches-table';


function LaunchesPage() {
  const { data: launches, isPending, isError, error } = useLaunches();

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Launches</h1>
        <p className="mt-2 text-muted-foreground">
          Explore SpaceX missions and their launch history.
        </p>
      </div>

      {isPending && (
        <p className="text-sm text-muted-foreground">
          Loading launches…
        </p>
      )}

      {isError && (
        <p role="alert" className="text-sm text-destructive">
          Failed to load launches: {error.message}
        </p>
      )}

      {launches && !isPending && (
        <LaunchesTable launches={launches} />
      )}
    </section>
  );
}

export const Route = createFileRoute('/launches/')({
  component: LaunchesPage,
});
