export interface WeatherData {
  name: string;
  visibility: number;
  timezone: number;
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}
