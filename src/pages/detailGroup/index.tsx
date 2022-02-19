import React from "react";
import { data } from "./mockdataDetail";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./styles.scss";
import ListReport from "../../components/pageComponent/detailGroup/listReport";
import { Col, Popconfirm, Row } from "antd";
import ListMember from "../../components/pageComponent/detailGroup/listMember";
import { useNavigate } from "react-router";
import PATH_ROUTE from "../../router/const";

function DetailGroup() {
  let navigate = useNavigate();
  const handleEdit = () => {
    console.log("Redirect edit");
  };

  const handleDelete = () => {
    console.log("Delete");
    //action delete
    navigate(`/${PATH_ROUTE.listGroup}`);
  };
  return (
    <div className="wrapper-detail-page">
      <Row>
        <Col span={12}>
          <div className="detail-header">
            {data.name}
            <span className="detail-action">
              <EditOutlined
                style={{ cursor: "pointer" }}
                onClick={handleEdit}
              />{" "}
              &nbsp;
              <Popconfirm
                placement="top"
                title={`Bạn có chắc chắn muốn xóa "${data.name}" ? `}
                onConfirm={handleDelete}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined
                  style={{ cursor: "pointer" }}
                  // onClick={handleDelete}
                />
              </Popconfirm>
            </span>
          </div>
          <div className="detail-description">{data.description}</div>
          <div className="detail-list-report">
            <span className="detail-header">
              Danh sách báo cáo - tool báo cáo
            </span>
            <div className="detail">
              <ListReport listTool={data.children} />
            </div>
          </div>
        </Col>
        <Col span={2}></Col>
        <Col span={10}>
          <ListMember listMember={data.members} />
        </Col>
      </Row>
    </div>
  );
}

export default DetailGroup;
