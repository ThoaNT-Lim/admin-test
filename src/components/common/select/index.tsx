import { Select } from "antd";
import { LabeledValue } from "antd/lib/select";
import React, { ReactNode } from "react";
import "./styles.scss";

interface SelectProps {
  style?: any;
  mode?: "multiple" | "tags";
  placeholder?: ReactNode;
  removeIcon?: ReactNode;
  searchValue?: string;
  options?: { label: string; value: any }[];
  size?: "large" | "middle" | "small";
  suffixIcon?: ReactNode;
  value?: string | number | (string | number)[];
  onChange?: (params: any) => void;
  children?: any;
  defaultValue?:
    | string
    | number
    | (string | number)[]
    | LabeledValue
    | LabeledValue[];
  onSelect?: (params: any) => void;
  allowClear?: boolean;
  showArrow?: boolean;
  tagRender?: any;
}

function SelectCustom(props: SelectProps) {
  const {
    mode,
    placeholder,
    removeIcon,
    searchValue,
    options,
    suffixIcon,
    value,
    onChange,
    children,
    defaultValue,
    style,
    allowClear,
    onSelect,
    showArrow,
    tagRender,
  } = props;
  return (
    <Select
      mode={mode}
      style={style}
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={onChange}
      className="style-select"
      onSelect={onSelect}
      allowClear={allowClear}
      size="large"
      showArrow={showArrow}
      tagRender={tagRender}
      value={value}
      removeIcon={removeIcon}
      searchValue={searchValue}
      options={options}
      suffixIcon={suffixIcon}
    >
      {children}
    </Select>
  );
}

export default SelectCustom;
