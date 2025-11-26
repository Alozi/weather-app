import styled, { keyframes } from "styled-components";
import type { ForecastData } from "../types/forecast";

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
  background: ${({ theme }) => theme.card.cardBackground};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.card.cardShadow};
  padding: 2rem 3rem;
  text-align: center;
  width: 100%;
  max-width: 700px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: ${({ theme }) => theme.card.cardText};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.card.cardShadow};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: ${({ theme }) => theme.card.cardBackgroundGradient};
    -webkit-mask: ${({ theme }) => theme.card.cardMask};
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export default function ForecastCard({ item }: { item: ForecastData }) {
  const date = new Date(item.dt * 1000).toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

  return (
    <Card>
      <p>{date}</p>
      <img src={iconUrl} alt={item.weather[0].description} />
      <p>{Math.round(item.main.temp)}°C</p>
    </Card>
  );
}
