import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  max-height: 400px;
  margin: 10px;
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #0B0E11;
  border: none;
`;

export const TableHeader = styled.th`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #181A20;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 15px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #181a20;
  }

  &:hover {
    background-color: #2B3139;
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
