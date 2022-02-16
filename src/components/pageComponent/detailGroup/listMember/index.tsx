import { List } from "antd";
import React from "react";
import { MemberProps } from "../type";
import './styles.scss';

function ListMember({ listMember }: { listMember: MemberProps[] }) {
  return (
    <div className="list-member">
      <div className="member-header">Danh sách thành viên</div>
      <div className="member-list">
        <List
          size="small"
          header={null}
          footer={null}
          bordered={false}
          dataSource={listMember}
          renderItem={(item) => <List.Item>{item.id}&nbsp;{item.name}</List.Item>}
        />
      </div>
    </div>
  );
}

export default ListMember;
