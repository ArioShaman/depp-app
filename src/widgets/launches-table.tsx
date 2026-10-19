
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import type { Launch } from '@dptypes/launch';


interface LaunchesTableProps {
  launches: Launch[];
}

function formatDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return 'Unknown';
  }

  return new Intl.DateTimeFormat('en', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'UTC',
  }).format(date) + ' UTC';
}

function SuccessBadge({ success }: { success: boolean | null }) {
  if (success === null) {
    return <Badge variant="secondary">Unknown</Badge>;
  }

  return success
    ? <Badge>Success</Badge>
    : <Badge variant="destructive">Failed</Badge>;
}

export function LaunchesTable({ launches }: LaunchesTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Mission</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Result</TableHead>
            <TableHead className="text-right">Launch date (UTC)</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {launches.map((launch, index) => (
            <TableRow key={`${launch.name}-${launch.date_utc}-${index}`}>
              <TableCell className="font-medium">
                {launch.name}
              </TableCell>
              <TableCell>{launch.status}</TableCell>
              <TableCell>
                <SuccessBadge success={launch.success} />
              </TableCell>
              <TableCell className="text-right tabular-nums">
                {formatDate(launch.date_utc)}
              </TableCell>
            </TableRow>
          ))}

          {launches.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} className="h-24 text-center">
                No launches found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
