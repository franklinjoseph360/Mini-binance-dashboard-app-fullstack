export interface TableProps<T extends Record<string, any>> {
    data: T[];
    sortableColumns?: (keyof T)[];
  }