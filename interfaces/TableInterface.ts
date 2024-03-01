export interface TableColumnInterface {
  name: string;
  key: string;
}

export interface TableDataInterface {
  columns: TableColumnInterface[];
  rows: Record<string, any>[];
}

export interface TableInterface {
  data: TableDataInterface;
}
