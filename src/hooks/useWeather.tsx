import { useEffect, useState } from "react";
import { fetchWeather, fetchForecast } from "../api/fetchWeather";
import type { WeatherData } from "../types/weather";
import type { ForecastData } from "../types/forecast";

export function useWeather(API_KEY: string, city: string) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        setLoading(true);

        const [weatherData, forecastData] = await Promise.all([
          fetchWeather({ API_KEY, city }),
          fetchForecast({ API_KEY, city }),
        ]);

        setWeather(weatherData);
        setForecast(forecastData);
      } catch {
        setError("City not found. Please try again.");
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [API_KEY, city]);

  return {
    weather,
    forecast,
    error,
    loading,
    setWeather,
    setForecast,
    setError,
  };
}
