import styled from "styled-components";
import WeatherCard from "./components/WeatherCard";
import { GlobalStyle } from "./styles/GlobalStyles";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 3rem;
  /* background: linear-gradient(135deg, #a2d2ff 0%, #ffe5ec 100%); */
  background: linear-gradient(to bottom right, #a2d2ff, #bde0fe, #fff1e6);
  padding: 2rem;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

async function getWeather() {
  console.log("getWeather");
  try {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const city = "Kyiv";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
    console.log("Weather:", data);
    console.log(`Temperature ${data.name}: ${data.main.temp}°C`);
    console.log(`Description: ${data.weather[0].description}`);
  } catch (error) {
    console.log(error);
  }
}

function App() {
  getWeather();

  return (
    <>
      <Layout>
        <Title>Weather Forecast App</Title>
        <WeatherCard />
      </Layout>
      <GlobalStyle />
    </>
  );
}

export default App;
