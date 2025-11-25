export async function fetchCities(query: string, API_KEY: string) {
  if (!query) return [];

  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(
    query
  )}&limit=5&appid=${API_KEY}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch cities");
  }

  return res.json();
}
