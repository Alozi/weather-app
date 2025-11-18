import styled from "styled-components";

const EmptyStateBox = styled.div`
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  border: 1px solid #ccc;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  margin-top: 1rem;
`;

export default function EmptyState({ message }: { message: string }) {
  return <EmptyStateBox>{message}</EmptyStateBox>;
}
