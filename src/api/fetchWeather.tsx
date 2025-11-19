interface fetchData {
  API_KEY: string;
  city?: string;
  lat?: number;
  lon?: number;
}

export async function fetchWeather({ API_KEY, city, lat, lon }: fetchData) {
  let url = "";

  if (lat !== undefined && lon !== undefined) {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  } else if (city) {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  } else {
    throw new Error("Either city or lat/lon must be provided");
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(String(response.status));
  }

  const data = await response.json();
  return data;
}

export async function fetchForecast({ API_KEY, city, lat, lon }: fetchData) {
  let url = "";

  if (lat !== undefined && lon !== undefined) {
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  } else if (city) {
    url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
  } else {
    throw new Error("Either city or lat/lon must be provided");
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(String(response.status));
  }

  const data = await response.json();
  const dailyForecast = data.list.filter(
    (_item: unknown, index: number) => index % 8 === 0
  );

  return dailyForecast;
}
