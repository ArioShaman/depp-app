import { useQuery } from '@tanstack/react-query';
import { getLaunches } from '../api/launches';

export function useLaunches() {
  return useQuery({
    queryKey: ['launches'],
    queryFn: getLaunches,
  });
}
