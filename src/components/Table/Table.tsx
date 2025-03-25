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

export const Table = <T extends Record<string, any>>({
  data,
  sortableColumns = [],
}: TableProps<T>): React.ReactElement => {
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
    if (sortConfig?.key !== key) return <FaSort aria-hidden="true" />;
    return sortConfig.direction === 'asc' ? (
      <FaSortUp aria-hidden="true" />
    ) : (
      <FaSortDown aria-hidden="true" />
    );
  };

  if (!data || data.length === 0) {
    return (
      <TableContainer data-testid="table-container-no-records-testid">
        <StyledTable role="table" aria-label="Empty trades table">
          <tbody>
            <TableRow role="row">
              <TableCell role="cell">No Records</TableCell>
            </TableRow>
          </tbody>
        </StyledTable>
      </TableContainer>
    );
  }

  return (
    <TableContainer data-testid="table-container-testid">
      <StyledTable role="table" aria-label="Trades table">
        <thead>
          <TableRow role="row">
            {headers.map((header) => {
              const isSortable = sortableColumns.includes(header);
              const isSorted = sortConfig?.key === header;
              const sortDir = isSorted ? sortConfig?.direction : undefined;

              return (
                <TableHeader
                  key={header}
                  role="columnheader"
                  scope="col"
                  onClick={() => isSortable && handleSort(header)}
                  style={{ cursor: isSortable ? 'pointer' : 'default' }}
                  aria-sort={
                    isSortable
                      ? sortDir === 'asc'
                        ? 'ascending'
                        : sortDir === 'desc'
                        ? 'descending'
                        : 'none'
                      : undefined
                  }
                  aria-label={isSortable ? `Sort by ${header}` : undefined}
                >
                  {header}
                  {isSortable && <span style={{ marginLeft: 6 }}>{renderSortIcon(header)}</span>}
                </TableHeader>
              );
            })}
          </TableRow>
        </thead>
        <tbody>
          {sortedData.map((row, idx) => (
            <TableRow key={idx} role="row">
              {headers.map((key) => {
                const value = row[key];
                const formatted =
                  typeof value === 'number' && key === 'time'
                    ? new Date(value).toLocaleString()
                    : value?.toString();
                return (
                  <TableCell key={key} role="cell">
                    {formatted}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </TableContainer>
  );
};
