export interface ForecastData {
  list: [
    {
      dt: number;
      main: {
        temp: number;
      };
    }
  ];
}
