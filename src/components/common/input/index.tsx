import { Input } from "antd";
import React from "react";
import "./styles.scss";

interface InputProps {
  placeholder: string;
  type: string;
  style?: any;
  onChange?: any;
}

function InputCustom(props: InputProps) {
  const { placeholder, type, style, onChange } = props;
  return (
    <Input
      className="input-styles"
      placeholder={placeholder}
      type={type}
      style={style}
      size="large"
      onChange={onChange}
    />
  );
}

export default InputCustom;
