export interface Launch {
  name: string;
  status: string;
  success: boolean | null;
  date_utc: Date;
}
