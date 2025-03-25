import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #181a20;
  border-radius: 8px;
  color: #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;

export const StarIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #333;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888888;
  font-size: 16px;
  cursor: pointer;
`;

export const PairInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PairName = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;

export const PairSub = styled.a`
  font-size: 12px;
  color: #999999;
  text-decoration: none;

  svg {
    font-size: 10px;
    vertical-align: middle;
    margin-left: 4px;
  }
`;

export const PriceInfo = styled.div`
  color: #2ebd85;
  font-weight: bold;
  font-size: 20px;

  .subPrice {
    display: block;
    color: #ffffff;
    font-size: 14px;
    font-weight: normal;
  }
`;

export const TickerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;
`;

export const TickerItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TickerLabel = styled.div`
  font-size: 12px;
  color: #aaaaaa;
`;

export const TickerValue = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'positive',
  })<{ positive?: boolean }>`
    font-size: 14px;
    color: ${({ positive }) => (positive ? '#2ebd85' : '#f44336')};
    display: flex;
    gap: 4px;
  `;
  
