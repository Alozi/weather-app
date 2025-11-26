import styled from "styled-components";

const ErrorBox = styled.div`
  background: ${({ theme }) => theme.errorCard.background};
  color: ${({ theme }) => theme.errorCard.color};
  border: 1px solid ${({ theme }) => theme.errorCard.border};
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.errorCard.shadow};
  max-width: 400px;
  text-align: center;
  margin-top: 1rem;
`;

export default function ErrorCard({ message }: { message: string }) {
  return <ErrorBox>{message}</ErrorBox>;
}
