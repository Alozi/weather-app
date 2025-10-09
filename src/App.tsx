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

function App() {
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
