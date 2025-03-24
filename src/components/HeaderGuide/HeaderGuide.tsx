import React from 'react';
import {
  HeaderWrapper,
  Left,
  Right,
  StarIcon,
  PairInfo,
  PairName,
  PairSub,
  PriceInfo,
  TickerItem,
  TickerLabel,
  TickerValue,
} from './HeaderGuide.style';
import { FaStar } from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { HeaderGuideProps } from './HeaderGuide.types';

export const HeaderGuide: React.FC<HeaderGuideProps> = ({
  pair,
  pairLink,
  price,
  priceUSD,
  tickerData,
}) => {
  return (
    <HeaderWrapper>
      <Left>
        <StarIcon>
          <FaStar />
        </StarIcon>

        <PairInfo>
          <PairName>{pair}</PairName>
          <PairSub href={pairLink} target="_blank" rel="noopener noreferrer">
            {pair.split('/')[0]} Price <FaArrowUpRightFromSquare />
          </PairSub>
        </PairInfo>

        <PriceInfo>
          {price}
          <span className="subPrice">${priceUSD}</span>
        </PriceInfo>
      </Left>

      <Right>
        {tickerData.map((item, index) => (
          <TickerItem key={index}>
            <TickerLabel>{item.label}</TickerLabel>
            <TickerValue positive={item.positive}>
              {typeof item.value === 'string' || typeof item.value === 'number'
                ? item.value
                : item.value}
            </TickerValue>
          </TickerItem>
        ))}
      </Right>
    </HeaderWrapper>
  );
};
