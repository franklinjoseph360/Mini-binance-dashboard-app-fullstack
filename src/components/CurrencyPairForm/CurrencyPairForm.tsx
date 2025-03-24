import React from 'react';

import {
  CurrencyTableContainer,
  CurrencyTable,
  TableHeader,
  TableCell,
  TableRow,
  PositiveChange,
  NegativeChange
} from './CurrencyPairForm.styles';
import { StyledButton } from '../Button/Button.style';

const data = [
  { pair: 'ETH/BTC', price: '0.00020255', change: -2.58 },
  { pair: 'KCS/BTC', price: '0.00013192', change: 5.6 },
  { pair: 'XRP/BTC', price: '0.00002996', change: -1.55 },
  { pair: 'VET/BTC', price: '0.00000103', change: 1.8 },
];

export const CurrencyPairForm = (): React.ReactElement => (
  <CurrencyTableContainer>
    <CurrencyTable>
      <thead>
        <TableRow>
          <TableHeader>Pairs</TableHeader>
          <TableHeader>Last Price</TableHeader>
          <TableHeader>Change</TableHeader>
        </TableRow>
      </thead>
      <tbody>
        {data.map(({ pair, price, change }) => (
          <TableRow key={pair}>
            <TableCell>{pair}</TableCell>
            <TableCell>{price}</TableCell>
            {change >= 0 ? (
              <PositiveChange>{`+${change}%`}</PositiveChange>
            ) : (
              <NegativeChange>{`${change}%`}</NegativeChange>
            )}
          </TableRow>
        ))}
        <TableRow>
          <StyledButton $size='SMALL'>search</StyledButton>
        </TableRow>
      </tbody>
    </CurrencyTable>
  </CurrencyTableContainer>
);

export default CurrencyPairForm;
