import type { Launch } from "@dptypes/launch";

interface LaunchApiResponse {
  name: string;
  status: string;
  success: boolean | null;
  date_utc: string;
}

const API_URL = 'https://gateway.pipeworx.io/spacex/v4';

export async function getLaunches(): Promise<Launch[]> {
  const response = await fetch(`${API_URL}/launches`);

  if (!response.ok) {
    throw new Error(`Failed to fetch launches: ${response.status}`);
  }

  const data: LaunchApiResponse[] = await response.json();

  return data.map((launch) => ({
    ...launch,
    date_utc: new Date(launch.date_utc),
  }));
}