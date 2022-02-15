import React, { useState } from "react";
import "./styles.scss";
import { SearchOutlined } from "@ant-design/icons";
import { Avatar, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Search } = Input;

function HeaderCustom() {
  const [isShowInput, setIsShowInput] = useState(false);
  const [keyWork, setKeyWord] = useState("");

  const handleClickShowInputSearch = () => {
    setIsShowInput(!isShowInput);
  };
  const handleSearch = () => {
    console.log("keyword--->", keyWork);
  };

  const hanldeChangeSearch = (e: any) => {
    setKeyWord(e.target.value);
  };
  return (
    <div className="header">
      <div className="header-search">
        {false ? (
          <Search
            placeholder="input search text"
            onSearch={handleSearch}
            style={{ width: 200 }}
            onChange={hanldeChangeSearch}
            onPressEnter={handleSearch}
          />
        ) : (
          <SearchOutlined
            style={{ color: "#c4c4c4", fontSize: "18px" }}
            onClick={handleClickShowInputSearch}
          />
        )}
      </div>
      <div className="header-avatar">
        <Avatar size={32} icon={<UserOutlined />} />
      </div>
    </div>
  );
}

export default HeaderCustom;
