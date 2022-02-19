import React from "react";
import FormCreateGroup from "../../components/pageComponent/createGroup";
import "./styles.scss";

function CreateGroup() {
  return (
    <div className="wrapper-create-list-group">
      <div className="group-header">Tạo group</div>
      <div className="group-table">
        <FormCreateGroup />
      </div>
    </div>
  );
}

export default CreateGroup;
