import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCities } from "../api/fetchCities";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 1000px;
`;

const Input = styled.input`
  height: 48px;
  width: 100%;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #0077b6;
  }
`;

const Button = styled.button`
  height: 48px;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: #0077b6;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #535bf2;
  }
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  width: calc(100% - 190px);
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  margin: 0;
  padding: 0.3rem 0;
  max-height: 250px;
  overflow-y: auto;
  z-index: 100;
`;

const Item = styled.li`
  padding: 0.7rem 1rem;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background: #f0f0f0;
  }
`;

export default function SearchBar({
  API_KEY,
  onSearch,
  onGetCurrentPosition,
}: {
  API_KEY: string;
  onSearch: (city: string) => void;
  onGetCurrentPosition: () => void;
}) {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (city.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const cities = await fetchCities(city, API_KEY);
        setSuggestions(cities);
      } catch {
        setSuggestions([]);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [city, API_KEY]);

  const handleSelect = (name: string) => {
    onSearch(name);
    setCity("");
    setSuggestions([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div style={{ width: "100%", position: "relative" }}>
        <Input
          type="text"
          placeholder="Search for cities"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        />

        {isFocused && suggestions.length > 0 && (
          <Dropdown>
            {suggestions.map((item) => (
              <Item
                key={`${item.lat}-${item.lon}`}
                onClick={() => handleSelect(item.name)}
              >
                {item.name}, {item.country}
              </Item>
            ))}
          </Dropdown>
        )}
      </div>
      <Button type="submit">Search</Button>
      <Button type="button" onClick={onGetCurrentPosition}>
        My location
      </Button>
    </Form>
  );
}
