import styled from "styled-components";

const EmptyStateBox = styled.div`
  background: ${({ theme }) => theme.colors.backgroundColor};
  color: ${({ theme }) => theme.input.grey};
  border: 1px solid ${({ theme }) => theme.colors.greyColor};
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  max-width: 400px;
  text-align: center;
  margin-top: 1rem;
`;

export default function EmptyState({ message }: { message: string }) {
  return <EmptyStateBox>{message}</EmptyStateBox>;
}
