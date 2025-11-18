import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 6px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default function Loader() {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
}
