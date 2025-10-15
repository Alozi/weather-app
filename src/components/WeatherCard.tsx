import styled, { keyframes } from "styled-components";
import type { WeatherData } from "../types/weather";
import { WiHumidity, WiStrongWind, WiCloud, WiThermometer, WiSunrise, WiSunset, WiFog, WiTime1 } from "react-icons/wi";

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
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const Time = styled.p`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 1.2rem;
  color: #0077b6;

  svg {
    font-size: 2rem;
    color: #0077b6;
  }
`;

const Temperature = styled.p`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #023e8a;
  
  svg {
    font-size: 4rem;
    color: #023e8a;
  }
`;

const FeelsLike = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #023e8a;
`;

const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: #023e8a;
  text-transform: capitalize;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem 1.5rem;
  justify-items: center;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: #03045e;
  font-size: 1rem;
  
  svg {
    font-size: 2rem;
    color: #0077b6;
  }
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
  const currentTime = new Date().toLocaleString();
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  console.log(weather);

  return (
    <Card>
      <City>
        {weather.name}, {weather.sys.country}
      </City>
      <Time><WiTime1/>{currentTime} EET (UTC+3)</Time>
      <Temperature><WiThermometer/>{Math.round(weather.main.temp)}°C</Temperature>
      <FeelsLike>Feels like {Math.round(weather.main.feels_like)}°C</FeelsLike>
      <Icon src={iconUrl} alt={weather.weather[0].description} />
      <Description>{weather.weather[0].description}</Description>
      <Details>
        <InfoItem><WiCloud />Clouds: {weather.clouds.all}%</InfoItem>
        <InfoItem><WiStrongWind/>Wind: {weather.wind.speed} m/s</InfoItem>
        <InfoItem><WiHumidity />Humidity: {weather.main.humidity}%</InfoItem>
        <InfoItem><WiFog/>Visibility: {weather.visibility/1000}km</InfoItem>
        <InfoItem><WiSunrise />Sunrise: {weather.sys.sunrise}</InfoItem>
        <InfoItem><WiSunset />Sunset: {weather.sys.sunset}</InfoItem>
      </Details>
    </Card>
  );
}
