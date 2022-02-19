import React from "react";
import { Link } from "react-router-dom";
import ButtonCustom from "../../components/common/button";
import ListGroupComponent from "../../components/pageComponent/listGroup";
import PATH_ROUTE from "../../router/const";
import "./styles.scss";
function ListGroup() {
  return (
    <div className="wrapper-list-group">
      <div className="group-header">Danh sách group</div>
      <div className="group-action">
        <Link to={PATH_ROUTE.createGroup}>
          <ButtonCustom type="primary" name="Tạo group mới" />
        </Link>
      </div>
      <div className="group-table">
        <ListGroupComponent />
      </div>
    </div>
  );
}

export default ListGroup;
