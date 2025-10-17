export interface ForecastData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}
