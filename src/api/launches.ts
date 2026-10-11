export interface Launch {
  name: string;
  status: string;
  success: boolean | null;
  date_utc: Date;
}

const API_URL = 'https://gateway.pipeworx.io/spacex/v4';

export async function getLaunches(): Promise<Launch[]> {
  const response = await fetch(`${API_URL}/launches`);

  if (!response.ok) {
    throw new Error(`Failed to fetch launches: ${response.status}`);
  }

  return response.json() as Promise<Launch[]>;
}