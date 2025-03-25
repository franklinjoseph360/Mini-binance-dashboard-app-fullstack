import styled from 'styled-components';
import { colors, spacing } from '@styles/variables';

export const TableContainer = styled.div`
  width: 100%;
  max-height: 435px;
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: auto;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${colors.border.scrollbarThumb};
    border-radius: 4px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colors.background.primary};
  border: none;
`;

export const TableHeader = styled.th`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${colors.background.highlight};
  font-size: 16px;
  font-weight: bold;
  white-space: nowrap;
  padding: ${spacing.md};
  text-align: left;
`;

export const TableCell = styled.td`
  padding: ${spacing.sm};
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: ${colors.background.secondary};
  }

  &:hover {
    background-color: ${colors.background.hover};
  }
`;

export const PositiveChange = styled.td`
  color: #4caf50;
  padding: ${spacing.md} ${spacing.lg};
  text-align: left;
`;

export const NegativeChange = styled.td`
  color: ${colors.font.secondary};
  padding: ${spacing.md} ${spacing.lg};
  text-align: left;
`;
