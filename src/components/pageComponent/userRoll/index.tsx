import { CloseCircleFilled } from "@ant-design/icons";
import { Form, List, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import ButtonCustom from '../../common/button';
import SelectCustom from '../../common/select';
import SelectSearch from "../../common/select/selectSearch";
import './styles.scss';


function FormUserAddRoll() {
    const [form] = Form.useForm();
    const [listGroup, setListGroup]  = useState<(string | number)[]>([]);

    const { Option } = Select;
    const children: JSX.Element[] = [];
    for (let i = 10; i < 36; i++) {
      children.push(
        <Option key={'Group ' + i}>{'Group ' + i}</Option>
      );
    }
  
    const onFinish = (values: any) => {
      console.log("Success:", values);
    };

    const handleChangeSelectGroup = (group: (string | number)[]) => {
        setListGroup(group);
      };

      const hanldeDeleteReport = (item: string | number) => {
        const listGroupRemaining = listGroup.filter((report) => report !== item);
        setListGroup(listGroupRemaining);
        
      };

      useEffect(() => {
        form.setFieldsValue({
            group: listGroup
          });
      }, [form, listGroup])

      const handleCancel = () => {
          form.resetFields();
          setListGroup([]);
      }
  
    return (
      <div className="group-form-create">
        <Form name="basic" autoComplete="off" form={form} onFinish={onFinish}>
          <div className="user-form-info">
            <div className="group-form-title">Chọn user</div>
          <Form.Item
          name={'user'}
          style={{ marginBottom: 0 }}
        >
          <SelectSearch
            placeholder="Chọn user"
            showArrow={true}
          />
        </Form.Item>
          </div>
        <div className="group-form-info">
            <div className="group-form-title">Group user có thể truy cập</div>
          </div>
        <Form.Item
          name={'group'}
          style={{ marginBottom: 0 }}
        >
          <SelectCustom
            placeholder="Chọn group"
            children={children}
            onChange={handleChangeSelectGroup}
            showArrow={true}
            mode="multiple"
            value={listGroup}
          />
        </Form.Item>
        {listGroup.length > 0 && <List
          size="small"
          header={null}
          footer={null}
          bordered
          dataSource={listGroup}
          renderItem={(item: string | number, key: number) => (
            <List.Item key={key}>
              {item}
              <CloseCircleFilled onClick={() => hanldeDeleteReport(item)} />
            </List.Item>
          )}
        />}
         
          <Form.Item className="button-submit" style={{marginTop: 36}}>
            <Space>
              <ButtonCustom htmlType="button" name="Hủy" handleClick={handleCancel}/>
              <ButtonCustom type="primary" htmlType="submit" name="Phân quyền" />
            </Space>
          </Form.Item>
        </Form>
      </div>
      )
}

export default FormUserAddRoll