export interface WeatherData {
  name: string;
  sys: {
    country: string;
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
