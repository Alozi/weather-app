import { useState } from "react";
import styled from "styled-components";
import type { SearchProps } from "../types/search";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  width: 300px;
`;

const Input = styled.input`
  width: 220px;
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

export default function SearchBar({ onSearch }: SearchProps) {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim() === "") return;
    onSearch(city);
    setCity("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search for cities"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}
