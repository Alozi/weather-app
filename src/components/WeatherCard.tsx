import styled, { keyframes } from "styled-components";
import type { WeatherData } from "../types/weather";
import {
  WiHumidity,
  WiStrongWind,
  WiCloud,
  WiThermometer,
  WiSunrise,
  WiSunset,
  WiFog,
} from "react-icons/wi";

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
  position: relative;
  background: ${({ theme }) => theme.card.cardBackground};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.card.cardShadow};
  padding: 2rem;
  width: 100%;
  max-width: 1000px;
  backdrop-filter: blur(12px);
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.card.cardShadowHover};
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  margin: 1rem auto;
`;

const City = styled.h3`
  text-align: center;
  font-size: 2.2rem;
  color: ${({ theme }) => theme.card.cardText};
  margin: 0.5rem 0;
`;

const Time = styled.p`
  text-align: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.card.cardText};

  svg {
    font-size: 1.6rem;
  }
`;

const MainInfo = styled.div`
  min-width: 300px;
  flex: 1;
  min-width: 280px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;
`;

const Temperature = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 2.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.card.cardText};

  svg {
    font-size: 3rem;
    color: ${({ theme }) => theme.card.cardText};
  }
`;

const FeelsLike = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.card.cardText};
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.card.cardText};
  text-transform: capitalize;
`;

const Icon = styled.img`
  width: 100px;
  height: 100px;
  transition: transform 0.3s ease;
  margin: 0 auto;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Details = styled.div`
  flex: 1;
  min-width: 280px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  align-content: center;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.card.cardText};

  svg {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.card.cardText};
  }
`;

export default function WeatherCard({ weather }: { weather: WeatherData }) {
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  const sunrise = new Date(
    (weather.sys.sunrise + weather.timezone) * 1000
  ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const sunset = new Date(
    (weather.sys.sunset + weather.timezone) * 1000
  ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const date = new Date(weather.dt * 1000).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card>
      <City>
        {weather.name}, {weather.sys.country}
      </City>
      <Time>{date}</Time>
      <Wrapper>
        <MainInfo>
          <Temperature>
            <WiThermometer />
            {Math.round(weather.main.temp)}°C
          </Temperature>
          <Icon src={iconUrl} alt={weather.weather[0].description} />
          <FeelsLike>
            Feels like {Math.round(weather.main.feels_like)}°C
          </FeelsLike>
          <Description>{weather.weather[0].description}</Description>
        </MainInfo>
        <Details>
          <InfoItem>
            <WiCloud /> {weather.clouds.all}% Clouds
          </InfoItem>
          <InfoItem>
            <WiStrongWind /> {weather.wind.speed} m/s Wind
          </InfoItem>
          <InfoItem>
            <WiHumidity /> {weather.main.humidity}% Humidity
          </InfoItem>
          <InfoItem>
            <WiFog /> {(weather.visibility / 1000).toFixed(1)} km Visibility
          </InfoItem>
          <InfoItem>
            <WiSunrise /> {sunrise} Sunrise
          </InfoItem>
          <InfoItem>
            <WiSunset /> {sunset} Sunset
          </InfoItem>
        </Details>
      </Wrapper>
    </Card>
  );
}
