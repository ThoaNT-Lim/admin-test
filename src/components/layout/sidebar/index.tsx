import { ArrowLeftOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoVIB from "../../../assets/images/logoVIB.png";
import PATH_ROUTE from "../../../router/const";
import "./styles.scss";
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div style={{ width: 230 }}>
        <div className="sidebar-logo">
          <img src={logoVIB} alt="logoVIB" />
        </div>
        <div className="sidebar-back">
          <ArrowLeftOutlined
            style={{ color: "#ffffff" }}
            onClick={() => navigate(-1)}
          />
        </div>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <Menu.Item key="1" style={{ color: "#ffffff" }}>
            <NavLink to={PATH_ROUTE.listGroup}>Danh sách group</NavLink>
          </Menu.Item>
          <Menu.Item key="2" style={{ color: "#ffffff" }}>
            <NavLink
             to={PATH_ROUTE.checkRollUser}
             className={(navData) => navData.isActive ? "active" : "noAcive" }
            >Phân quyền user</NavLink>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
}

export default Sidebar;
