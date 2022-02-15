import React from "react";
import ButtonCustom from "../../components/common/button";
import ListGroupComponent from "../../components/pageComponent/listGroup";
import "./styles.scss";
function ListGroup() {
  return (
    <div className="wrapper-list-group">
      <div className="group-header">Danh sách group</div>
      <div className="group-action">
        <ButtonCustom type="primary" name="Tạo group mới" />
      </div>
      <div className="group-table">
        <ListGroupComponent />
      </div>
    </div>
  );
}

export default ListGroup;
