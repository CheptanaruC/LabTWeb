import React, { useEffect } from 'react';

import {
    Button,
    Form,
    Input,
    InputNumber,
    Modal,

  } from 'antd';
import CardProduct from './models/Smartphone';

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 14 },
    },
  };
  


interface ModalFormProps {
  visible: boolean;
  onSubmit: (data: CardProduct) => void;
  onCancel:() => void;
  card : CardProduct;
}

const ModalForm: React.FC<ModalFormProps> = ({ visible, onCancel ,onSubmit, card }) => {
  const [form] = Form.useForm();

 

  const onFinish = (values: any) => {
    const CardProduct = {
      name : values.name,
      model : values.model,
      imageUrl : values.imageUrl,
      price : values.price,
      description : values.description,
      quantity : values.quantity,
      RAM : values.RAM,
      OS : values.OS,
      camera : values.camera
    }
    console.log("OnFinishMethod values")
    console.log(values);
    alert("Of course you want to add the product with the name: "+values.name+" ?");
    onSubmit(CardProduct); 
    form.resetFields();
  };
  
  
  useEffect(() =>{
    form.resetFields();
  },[onCancel])



  return (
    <Modal title="Add product" open={visible} onCancel={onCancel} footer={null}>
        <Form form={form} {...formItemLayout} onFinish={onFinish} initialValues={{}}>
 

          <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input product name!' }]}>
           <Input />
          </Form.Item>

          <Form.Item label="Model" name="model" rules={[{ required: true, message: 'Please input product model!' }]}>
           <Input />
          </Form.Item>
          <Form.Item label="ImageUrl" name="imageUrl" rules={[{ required: true, message: 'Please input imageUrl!' }]}>
           <Input />
          </Form.Item>



         <Form.Item label="Description" name="description" rules={[{ required: true, message: 'Please input a description!' }]}>
            <Input.TextArea />
          </Form.Item>

          <Form.Item label="Price" name="price" rules={[{ required: true, message: 'Please input product price!' }]}>            
           <InputNumber />
           </Form.Item>


          <Form.Item label="Quantity" name="quantity" rules={[{ required: true, message: 'Please input product quantity!' }]}>            
           <InputNumber />
           </Form.Item>

           <Form.Item label="RAM" name="RAM" rules={[{ required: true, message: 'Please input smartphone RAM!' }]}>            
           <InputNumber />
           </Form.Item>

           <Form.Item label="Camera" name="camera" rules={[{ required: true, message: 'Please input smartphone camera!' }]}>            
           <InputNumber />
           </Form.Item>

           <Form.Item label="OS" name="OS" rules={[{ required: true, message: 'Please input smartphone OS!' }]}>            
           <Input />
           </Form.Item>

          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
             <Button type="primary" htmlType="submit">
               Submit
             </Button>
           </Form.Item>
         </Form>
       </Modal>
  );
};

export default ModalForm;