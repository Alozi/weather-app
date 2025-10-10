import styled from "styled-components";
import type { WeatherData } from "../types/weather";

const Card = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  text-align: center;
  width: 300px;
  backdrop-filter: blur(10px);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }
`;

const City = styled.h2`
  font-size: 2rem;
  color: #0077b6;
  margin-bottom: 0.5rem;
`;

const Temperature = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  color: #03045e;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

export default function WeatherCard({ weather }: { weather: WeatherData }) {
  console.log(weather);

  return (
    <Card>
      <City>
        {weather.name}, {weather.sys.country}
      </City>
      <Temperature>{weather.main.temp}°C</Temperature>
      <Description>{weather.weather[0].main}</Description>
    </Card>
  );
}
