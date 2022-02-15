import { RowDataProps } from "./type";

export const columns = [
  {
    title: "Mã group",
    dataIndex: "id",
    width: 100,
  },
  {
    title: "Tên",
    dataIndex: "name",
  },
  {
    title: "Mô tả",
    dataIndex: "description",
  },
  {
    title: "Hoạt động",
    dataIndex: "",
    width: 120,
    render: (item: RowDataProps) => {
      return <span style={{ color: "#1E71B8" }}>Chỉnh sửa</span>;
    },
  },
];
