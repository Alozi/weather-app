export async function fetchWeather({
  API_KEY,
  city,
  lat,
  lon,
}: {
  API_KEY: string;
  city?: string;
  lat?: number;
  lon?: number;
}) {
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
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();

  console.log(data);

  return data;
}

export async function fetchForecast({
  API_KEY,
  city,
  lat,
  lon,
}: {
  API_KEY: string;
  city?: string;
  lat?: number;
  lon?: number;
}) {
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
    throw new Error(`Response status: ${response.status}`);
  }

  const data = await response.json();
  const dailyForecast = data.list.filter(
    (_item: unknown, index: number) => index % 8 === 0
  );

  return dailyForecast;
}
