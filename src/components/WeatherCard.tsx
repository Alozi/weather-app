import styled, { keyframes } from "styled-components";
import type { WeatherData } from "../types/weather";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  text-align: center;
  width: 100%;
  max-width: 500px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #48cae4, #0096c7, #ade8f4);
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

const City = styled.h2`
  font-size: 2.2rem;
  color: #0077b6;
`;

// const Title = styled.h3`
//   font-size: 1.5rem;
//   color: #0077b6;
//   text-transform: uppercase;
//   letter-spacing: 1px;
//   margin-bottom: 0.5rem;
// `;

const Temperature = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
  color: #023e8a;
`;

// const FeelsLike = styled.p`
//   font-size: 1rem;
//   color: #555;
// `;

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1.5rem;
  justify-items: center;
  width: 100%;

  p {
    font-size: 1rem;
    color: #444;
    margin: 0;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  text-transform: capitalize;
`;

const Icon = styled.img`
  width: 110px;
  height: 110px;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export default function WeatherCard({ weather }: { weather: WeatherData }) {
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  console.log(weather);

  return (
    <Card>
      <City>
        {weather.name}, {weather.sys.country}
      </City>

      <Icon src={iconUrl} alt={weather.weather[0].description} />
      <Temperature>{Math.round(weather.main.temp)}°C</Temperature>
      <Description>{weather.weather[0].description}</Description>

      <Details>
        <p>Feels like: {Math.round(weather.main.feels_like)}°C</p>
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Clouds: {weather.clouds.all}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </Details>
    </Card>
  );
}
