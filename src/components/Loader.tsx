import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.loader.background};
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: ${({ theme }) => theme.loader.border};
  border-top-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default function Loader() {
  return (
    <Overlay>
      <Spinner />
    </Overlay>
  );
}
