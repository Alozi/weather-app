import styled from "styled-components";
import type { WeatherData } from "../types/weather";

const Card = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  text-align: center;
  /* width: 500px; */
  width: 100%;
  max-width: 500px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`;

const City = styled.h2`
  font-size: 2rem;
  color: #0077b6;
  margin-bottom: 0.25rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  color: #0077b6;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

const Time = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Temperature = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: #023e8a;
  margin: 0.5rem 0;
`;

const FeelsLike = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #444;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  text-transform: capitalize;
`;

const Icon = styled.img`
  width: 90px;
  height: 90px;
`;

export default function WeatherCard({ weather }: { weather: WeatherData }) {
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const currentTime = new Date().toLocaleString();

  console.log(weather);

  return (
    <Card>
      <Title>Current Weather</Title>
      <City>
        {weather.name}, {weather.sys.country}
      </City>
      <Time>{currentTime} (EET, UTC+2/3)</Time>
      <Icon src={iconUrl} alt={weather.weather[0].description} />
      <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
      <FeelsLike>Feels like {Math.round(weather.main.feels_like)}°C</FeelsLike>
      <Description>{weather.weather[0].description}</Description>

      <Details>
        <p>💧 {weather.main.humidity}%</p>
        <p>☁️ {weather.clouds.all}%</p>
        <p>🌬 {weather.wind.speed} m/s</p>
      </Details>
    </Card>
  );
}
