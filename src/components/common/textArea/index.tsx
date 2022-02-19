import { Input } from "antd";
import React from "react";
import "./styles.scss";

interface InputProps {
  placeholder?: string;
  type?: string;
  style?: any;
  autoSize?: boolean | object;
  bordered?: boolean;
  defaultValue?: string;
  maxLength?: number;
  showCount?: boolean | any;
  value?: string;
  onPressEnter?: (param: any) => void;
  onResize?: (param: any) => void;
  allowClear?: boolean;
  onChange?: any;
}

const { TextArea } = Input;

function TextAreaCustom(props: InputProps) {
  const {
    placeholder,
    style,
    autoSize,
    bordered,
    defaultValue,
    maxLength,
    showCount,
    value,
    onPressEnter,
    onResize,
    allowClear,
    onChange,
  } = props;
  return (
    <TextArea
      className="input-styles"
      placeholder={placeholder}
      style={style}
      autoSize={autoSize}
      bordered={bordered}
      defaultValue={defaultValue}
      maxLength={maxLength}
      showCount={showCount}
      value={value}
      onPressEnter={onPressEnter}
      onResize={onResize}
      onChange={onChange}
      allowClear={allowClear}
      size="large"
    />
  );
}

export default TextAreaCustom;
