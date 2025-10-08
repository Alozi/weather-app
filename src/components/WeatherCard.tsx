import styled from "styled-components";

const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  text-align: center;
  width: 300px;
`;

const City = styled.h2`
  font-size: 1.5rem;
  color: #0077b6;
`;

const Temperature = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export default function WeatherCard() {
  return (
    <>
      <Card>
        <City>Irpin</City>
        <Temperature>+18°C</Temperature>
      </Card>
    </>
  );
}
