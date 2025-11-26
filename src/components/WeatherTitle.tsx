import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.card.titleColor};
  text-shadow: ${({ theme }) => theme.card.titleShadow};
`;

export default function WeatherTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
}
