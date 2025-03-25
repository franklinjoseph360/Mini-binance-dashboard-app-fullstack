import React, { useState } from 'react';
import {
  TableContainer,
  Table as StyledTable,
  TableHeader,
  TableCell,
  TableRow,
} from './Table.style';
import { TableProps } from './Table.types';
import { FaSort, FaSortDown, FaSortUp } from 'react-icons/fa';

type SortDirection = 'asc' | 'desc';

export const Table = <T extends Record<string, any>>({ data, sortableColumns = [] }: TableProps<T>): React.ReactElement => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: SortDirection;
  } | null>(null);

  const headers = data && data.length > 0 ? Object.keys(data[0]) : [];

  const sortedData = React.useMemo(() => {
    if (!sortConfig) return data;

    const { key, direction } = sortConfig;

    return [...data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return direction === 'asc' ? aVal - bVal : bVal - aVal;
      }

      return direction === 'asc'
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
  }, [data, sortConfig]);

  const handleSort = (key: string) => {
    setSortConfig((prev) => {
      if (prev?.key === key) {
        return {
          key,
          direction: prev.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return { key, direction: 'asc' };
    });
  };

  const renderSortIcon = (key: string) => {
    if (sortConfig?.key !== key) return <FaSort />;
    return sortConfig.direction === 'asc' ? <FaSortUp /> : <FaSortDown />;
  };

  if (!data || data.length === 0) {
    return (
      <TableContainer>
        <StyledTable>
          <tbody>
            <TableRow>
              <TableCell>No Records</TableCell>
            </TableRow>
          </tbody>
        </StyledTable>
      </TableContainer>
    )
  } else {
    return (
      <TableContainer>
        <StyledTable>
          <thead>
            <TableRow>
              {headers.map((header) => (
                <TableHeader
                  key={header}
                  onClick={() =>
                    sortableColumns.includes(header) && handleSort(header)
                  }
                  style={{
                    cursor: sortableColumns.includes(header) ? 'pointer' : 'default',
                  }}
                >
                  {header}{' '}
                  {sortableColumns.includes(header) && (
                    <span style={{ marginLeft: 6 }}>{renderSortIcon(header)}</span>
                  )}
                </TableHeader>
              ))}
            </TableRow>
          </thead>
          <tbody>
            {data.length > 0 ? (
              sortedData.map((row, idx) => (
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
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={headers.length} style={{ textAlign: 'center', padding: '2rem' }}>
                  No Records
                </TableCell>
              </TableRow>
            )}
          </tbody>

        </StyledTable>
      </TableContainer>
    );
  }
};
