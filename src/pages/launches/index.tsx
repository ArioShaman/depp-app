import { createFileRoute } from '@tanstack/react-router';
import { useLaunches } from '../../hooks/useLaunches';

function LaunchesPage() {
  const { data, isPending, isError, error } = useLaunches();

  if (isPending) {
    return <p>Loading launches...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  if (data.length === 0) {
    return <p>No launches found.</p>;
  }

  return (
    <section>
      <h2>SpaceX Launches</h2>

      <ul>
        {data.map((launch) => (
          <li>
            <h3>
              #{launch.name}
            </h3>

            <p>
              Date: {new Date(launch.date_utc).toLocaleDateString()}
            </p>

            <p>
              Status:{' '}
              { launch.success === null ? 'Unknown'
                  : launch.success
                    ? 'Success'
                    : 'Failed'}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export const Route = createFileRoute('/launches/')({
  component: LaunchesPage,
});