import { Form, Input, Button, Checkbox } from 'antd';
import {useState} from 'react'
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const MeetupForm = ({saveMeetupInfo}) => {
   
  const onFinish = (values) => {     
      console.log('Success:', values);
      saveMeetupInfo(values)

  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
         <Form.Item
        label="ID"
        name="id"
        rules={[
          {
            required: true,
            message: 'Please enter ID',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please enter title',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Image Url"
        name="imgUrl"
        rules={[
          {
            required: true,
            message: 'Enter URL',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Details"
        name="details"

        rules={[
          {
            required: true,
            message: 'Enter Details',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

// ReactDOM.render(<MeetupForm />, mountNode);
export default MeetupForm;