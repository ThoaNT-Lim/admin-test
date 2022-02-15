import { Button } from "antd";
import React from "react";
import "./styles.scss";

interface ButtonProps {
  name: string;
  style?: any;
  type:
    | "link"
    | "text"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
}

function ButtonCustom(props: ButtonProps) {
  const { name, type } = props;
  return (
    <span className="wrapper-button">
      <Button type={type}>{name}</Button>
    </span>
  );
}

export default ButtonCustom;
