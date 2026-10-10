import { createFileRoute } from '@tanstack/react-router';

function DashboardPage() {
  return <h2>Dashboard</h2>;
}

export const Route = createFileRoute('/')({
  component: DashboardPage,
});
