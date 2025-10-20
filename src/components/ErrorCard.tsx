import styled from "styled-components";

const ErrorBox = styled.div`
  background: #ffe5e5;
  color: #b00020;
  border: 1px solid #ffb3b3;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 4px 8px rgba(255, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  margin-top: 1rem;
`;

export default function ErrorCard({ message }: { message: string }) {
  return <ErrorBox>{message}</ErrorBox>;
}
