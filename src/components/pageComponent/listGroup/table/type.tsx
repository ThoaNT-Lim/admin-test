export interface RowDataProps {
  id: number;
  name: string;
  description: string;
}

interface User {
  id: number;
  name: string;
  avatar: string;
}
export interface DataTypeOneGroup {
  key: React.Key;
  id: number;
  name: string;
  description: string;
  members?: User[];
}

export interface DataListGroupType {
  data: DataTypeOneGroup[],
  totalRecords: number
}
