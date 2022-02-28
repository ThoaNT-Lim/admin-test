import { DeleteOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Input, Space, Table } from "antd";
import React, { useState } from "react";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";
import { data } from "./mockData";
import PATH_ROUTE from "../../../../router/const";
import "./styles.scss";
import { DataTypeOneGroup, RowDataProps } from "./type";
function TableListGroup() {
  const [groupSelected, setGroupSelected] = useState<DataTypeOneGroup[]>();
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState();
  const [dataRow, setDataRow] = useState(data);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    loading: false,
  });

  const rowSelection = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: DataTypeOneGroup[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setGroupSelected(selectedRows);
    },
    getCheckboxProps: (record: DataTypeOneGroup) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleDelete = () => {
    const dataNew = dataRow.filter((item) => !groupSelected?.includes(item));
    setDataRow(dataNew);
  };

  const getColumnSearchProps = (dataIndex: any) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }: {
      setSelectedKeys: (param: any) => void;
      selectedKeys: any;
      confirm: any;
      clearFilters: any;
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          //   ref={(node) => {
          //     searchInput = node;
          //   }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: any) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value: any, record: any) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible: boolean) => {
      if (visible) {
        // setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text: string) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  const handleSearch = (selectedKeys: any, confirm: any, dataIndex: any) => {
    confirm();

    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: any) => {
    clearFilters();
    setSearchText("");
  };

  const columns = [
    {
      title: "Mã group",
      dataIndex: "id",
      width: 120,
      ...getColumnSearchProps("id"),
      render: (id: number | string) => {
        return <Link to={`/${PATH_ROUTE.detailGroup}/${id}`}>{id}</Link>;
      },
    },
    {
      title: "Tên",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      //   ...getColumnSearchProps("description"),
    },
    {
      title: "Hoạt động",
      dataIndex: "",
      width: 120,
      render: (item: RowDataProps) => {
        return <Link to={`${PATH_ROUTE.editGroup}/${item.id}`}>{item.id}</Link>;
      },
    },
  ];

 
  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setPagination(pagination);
  };
  return (
    <div className="wrapper-table-group">
      {Array.isArray(groupSelected) && groupSelected?.length > 0 && (
        <div className="table-action">
          <DeleteOutlined style={{ fontSize: 20 }} onClick={handleDelete} />
        </div>
      )}
      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={dataRow}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </div>
  );
}

export default TableListGroup;
