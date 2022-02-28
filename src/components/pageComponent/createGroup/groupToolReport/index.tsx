import { CloseCircleFilled, MinusCircleOutlined } from "@ant-design/icons";
import { Form, List, TagProps } from "antd";
import React, { useState, useEffect } from "react";
import SelectCustom from "../../../common/select";
import "./styles.scss";

interface GroupToolProps {
  index: React.Key;
  name: number;
  restField?: any;
  children?: any;
  remove?: any;
  form?: any;
}
function GroupToolReport({
  index,
  name,
  restField,
  children,
  remove,
  form,
}: GroupToolProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [listReport, setListReport] = useState<(string | number)[]>([]);

  const handleSelect = () => {
    setIsOpen(true);
  };

  const handleChangeReport = (reports: (string | number)[]) => {
    setListReport(reports);
  };

  function tagRender(props: TagProps) {
    return <div></div>;
  }

  const hanldeDeleteReport = (item: string | number) => {
    const listReportRemaining = listReport.filter((report) => report !== item);
    setListReport(listReportRemaining);

    const fields = form.getFieldsValue();
    const { toolReport } = fields;

    Object.assign(toolReport[index], { report: listReportRemaining });
    form.setFieldsValue({ toolReport });
  };

  useEffect(() => {
    const fields = form.getFieldsValue();
    const { toolReport } = fields;
    if(toolReport.length > 0 && toolReport[index]?.tool){
      setIsOpen(true);
      setListReport(toolReport[index]?.report)
    }
  }, [form, index])

  return (
    <div className="group-form-tool" key={index}>
      <div className="group-form-title">Tool báo cáo {name + 1}</div>
      <div
        style={{
          display: "flex",
          marginBottom: 8,
          alignItems: "center",
          gap: 8,
          width: "104%",
        }}
      >
        <Form.Item
          {...restField}
          name={[name, "tool"]}
          rules={[
            {
              required: true,
              message: "Bạn chưa chọn tool báo cáo",
            },
          ]}
        >
          <SelectCustom
            placeholder="Chọn tool báo cáo"
            children={children}
            onSelect={handleSelect}
            allowClear={false}
          />
        </Form.Item>
        <MinusCircleOutlined
          onClick={() => remove(name)}
          style={{
            marginBottom: 24,
            fontSize: 28,
            color: "#c4c4c4",
          }}
        />
      </div>
      {isOpen && (
        <Form.Item
          {...restField}
          name={[name, "report"]}
          style={{ marginBottom: 0 }}
        >
          <SelectCustom
            placeholder="Chọn báo cáo"
            children={children}
            onChange={handleChangeReport}
            mode="multiple"
            showArrow={true}
            tagRender={tagRender}
            value={listReport}
          />
        </Form.Item>
      )}
      {listReport.length > 0 && (
        <List
          size="small"
          header={null}
          footer={null}
          bordered
          dataSource={listReport}
          renderItem={(item: string | number, key: number) => (
            <List.Item key={key}>
              {item}
              <CloseCircleFilled onClick={() => hanldeDeleteReport(item)} />
            </List.Item>
          )}
        />
      )}
    </div>
  );
}

export default GroupToolReport;
