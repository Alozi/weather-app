export async function fetchWeather(API_KEY: string, city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function fetchForecast(API_KEY: string, city: string) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
  const dailyForecast = data.list.filter(
    (_item: unknown, index: number) => index % 8 === 0
  );

  return dailyForecast;
}
