import { PlusCircleFilled } from "@ant-design/icons";
import { Button, Form, Select, Space } from "antd";
import React from "react";
import ButtonCustom from "../../common/button";
import InputCustom from "../../common/input";
import TextAreaCustom from "../../common/textArea";
import GroupToolReport from "./groupToolReport";
import "./styles.scss";

function FormCreateGroup() {
  const [form] = Form.useForm();

  const { Option } = Select;
  const children: JSX.Element[] = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  return (
    <div className="group-form-create">
      <Form name="basic" autoComplete="off" form={form} onFinish={onFinish}>
        <div className="group-form-info">
          <div className="group-form-title">Thông tin group</div>
          <div>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên group",
                },
              ]}
            >
              <InputCustom placeholder="Tên group" type="input" />
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name="description"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên mô tả group",
                },
              ]}
            >
              <TextAreaCustom
                placeholder="Mô tả group"
                autoSize={{ minRows: 4, maxRows: 6 }}
              />
            </Form.Item>
          </div>
        </div>
        <div className="group-form-tool">
          <Form.List name="toolReport">
            {(fields, { add, remove }) => {
              return (
                <>
                  {fields.map(({ key, name, ...restField }) => {
                    return (
                      <GroupToolReport
                        key={key}
                        index={key}
                        name={name}
                        restField={restField}
                        remove={remove}
                        children={children}
                        form={form}
                      />
                    );
                  })}
                  <Form.Item>
                    <Button
                      className="button-add-more"
                      type="link"
                      onClick={() => add()}
                      size="large"
                      icon={<PlusCircleFilled />}
                    >
                      Thêm mới tool báo cáo
                    </Button>
                  </Form.Item>
                </>
              );
            }}
          </Form.List>
        </div>
        <Form.Item className="button-submit">
          <Space>
            <ButtonCustom htmlType="button" name="Hủy" />
            <ButtonCustom type="primary" htmlType="submit" name="Tạo mới" />
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
}

export default FormCreateGroup;
