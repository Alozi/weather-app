import { useEffect, useState } from "react";
import { fetchWeather, fetchForecast } from "../api/fetchWeather";
import type { WeatherData } from "../types/weather";
import type { ForecastData } from "../types/forecast";

export function useWeather(API_KEY: string, city: string) {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastData[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!city) return;

    async function fetchData() {
      try {
        setError(null);
        setLoading(true);

        const [weatherData, forecastData] = await Promise.all([
          fetchWeather({ API_KEY, city }),
          fetchForecast({ API_KEY, city }),
        ]);

        localStorage.setItem("city", JSON.stringify(city));

        setWeather(weatherData);
        setForecast(forecastData);
      } catch (error: any) {
        const code = Number(error.message);

        if (code === 401) {
          setError("Invalid API key. Please check your API settings.");
        } else if (code === 404) {
          localStorage.removeItem("city");
          setError("City not found. Please try again.");
        } else if (code === 429) {
          setError("Too many requests. Please wait a moment.");
        } else if (error instanceof TypeError) {
          setError("Network error. Please check your internet connection.");
        } else {
          setError("Something went wrong. Please try again later.");
        }

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
