import { Input } from "antd";
import React from "react";
import "./styles.scss";

interface InputProps {
  placeholder: string;
  type: string;
  style?: any;
  onChange?: any;
  defaultValue?: any,
  value?: any
}

function InputCustom(props: InputProps) {
  const { placeholder, type, style, onChange, defaultValue, value } = props;
  return (
    <Input
      className="input-styles"
      placeholder={placeholder}
      type={type}
      style={style}
      size="large"
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
    />
  );
}

export default InputCustom;
