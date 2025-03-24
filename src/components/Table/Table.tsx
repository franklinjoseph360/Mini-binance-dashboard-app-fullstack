import React from 'react';
import {
  TableContainer,
  Table as StyledTable,
  TableHeader,
  TableCell,
  TableRow,
} from './Table.style';
import { TableProps } from './Table.types';

export const Table: React.FC<TableProps> = ({ data }) => {
  if (!data || data.length === 0) return <div>No data available</div>;

  const headers = Object.keys(data[0]);

  return (
    <TableContainer>
      <StyledTable>
        <thead>
          <TableRow>
            {headers.map((header) => (
              <TableHeader key={header}>{header}</TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <TableRow key={idx}>
              {headers.map((key) => {
                const value = row[key];
                const formatted =
                  typeof value === 'number' && key === 'time'
                    ? new Date(value).toLocaleString()
                    : value?.toString();

                return <TableCell key={key}>{formatted}</TableCell>;
              })}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
