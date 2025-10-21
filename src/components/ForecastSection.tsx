import styled from "styled-components";
import type { ForecastData } from "../types/forecast";
import ForecastCard from "./ForecastCard";

const TitleSecond = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

export default function ForecastSection({
  forecast,
}: {
  forecast: ForecastData[];
}) {
  return (
    <>
      <TitleSecond>5-Day Forecast</TitleSecond>
      <div style={{ display: "flex", gap: "1rem" }}>
        {forecast.map((item) => (
          <ForecastCard key={item.dt} item={item} />
        ))}
      </div>
    </>
  );
}
