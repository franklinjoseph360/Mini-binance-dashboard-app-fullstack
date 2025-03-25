import styled from 'styled-components';
import { colors, fontSize, fontWeight, spacing } from '@styles/variables';

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: ${spacing.lg};
  background-color: ${colors.background.secondary};
  border-radius: 8px;
  color: ${colors.font.primary};
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md};
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
  font-size: ${fontSize.base};
  cursor: pointer;
`;

export const PairInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PairName = styled.h1`
  font-size: ${fontSize.lg};
  font-weight: ${fontWeight.medium};
  margin: 0;
`;

export const PairSub = styled.a`
  font-size: ${fontSize.sm};
  color: #999999;
  text-decoration: none;

  svg {
    font-size: ${fontSize.xs};
    vertical-align: middle;
    margin-left: ${spacing.xs};
  }
`;

export const PriceInfo = styled.div`
  color: ${colors.status.success};
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.lg};

  .subPrice {
    display: block;
    color: ${colors.font.secondary};
    font-size: ${fontSize.base};
    font-weight: ${fontWeight.normal};
  }
`;

export const TickerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${spacing.lg};
`;

export const TickerItem = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TickerLabel = styled.div`
  font-size: ${fontSize.sm};
  color: #aaaaaa;
`;

export const TickerValue = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'positive',
})<{ positive?: boolean }>`
  font-size: ${fontSize.base};
  color: ${({ positive }) => (positive ? colors.status.success : '#f44336')};
  display: flex;
  gap: ${spacing.xs};
`;
