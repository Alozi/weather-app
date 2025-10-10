import { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  gap: 0.5rem;
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #646cff;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: none;
  background-color: #646cff;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #535bf2;
  }
`;

type SearchProps = {
  onSearch: (city: string) => void;
};

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
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
}
