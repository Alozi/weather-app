import type { ForecastData } from "../types/forecast";
import ForecastCard from "./ForecastCard";
import WeatherTitle from "./WeatherTitle";

export default function ForecastSection({
  forecast,
}: {
  forecast: ForecastData[];
}) {
  return (
    <>
      <WeatherTitle>5-Day Forecast</WeatherTitle>
      <div style={{ display: "flex", gap: "1rem" }}>
        {forecast.map((item) => (
          <ForecastCard key={item.dt} item={item} />
        ))}
      </div>
    </>
  );
}
