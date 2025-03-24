// CurrencyTable.styles.ts or .tsx
import styled from 'styled-components';

export const CurrencyTableContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 20px;
  overflow-x: auto;
`;

export const CurrencyTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #2a2a2a;
  border: 1px solid #444;
`;

export const TableHeader = styled.th`
  background-color: #333;
  font-weight: 500;
  padding: 12px 15px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #2e2e2e;
  }

  &:hover {
    background-color: #3a3a3a;
  }
`;

export const PositiveChange = styled.td`
  color: #4caf50;
  padding: 12px 15px;
  text-align: left;
`;

export const NegativeChange = styled.td`
  color: #f44336;
  padding: 12px 15px;
  text-align: left;
`;
