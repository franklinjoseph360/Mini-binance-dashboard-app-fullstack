import { FaBitcoin } from "react-icons/fa6";
import styled, { keyframes } from "styled-components";

export const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightColumn = styled.div`
  width: 65%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: #181a20;
  border-radius: 8px;
  padding: 1rem;
  box-sizing: border-box;
`;

export const CenteredMessage = styled.div<{ isError?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ isError }) => (isError ? 'red' : 'inherit')};
  width: 100%;
  height: 100%;
  min-height: 400px;
  box-sizing: border-box;
  background-color: #181a20;
  border-radius: 8px;
  padding: 2rem;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const SpinnerIcon = styled(FaBitcoin)`
  animation: ${spin} 1.5s linear infinite;
  font-size: 3rem;
  margin-bottom: 1rem;
`;
