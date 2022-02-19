import { Button } from "antd";
import React from "react";
import "./styles.scss";

interface ButtonProps {
  name?: string;
  style?: any;
  type?:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  htmlType?: "submit" | "button";
}

function ButtonCustom(props: ButtonProps) {
  const { name, type, htmlType } = props;
  return (
    <span className="wrapper-button">
      <Button type={type} htmlType={htmlType}>
        {name}
      </Button>
    </span>
  );
}

export default ButtonCustom;
