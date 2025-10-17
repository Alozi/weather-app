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
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  text-align: center;
  width: 100%;
  max-width: 700px;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

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
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
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
