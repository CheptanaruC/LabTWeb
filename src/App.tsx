import React, { useState } from 'react';
import ModalForm from '../ModalForm';

import { Button, Layout, theme } from 'antd';
import ProductCard from '../cards/ProductCard';
import MenuContainer from './MenuContainer';
import Smartphone from '../models/Smartphone';


const { Header, Content, Footer, Sider } = Layout;



const initialData:Smartphone[] = [
  {
   name: "iPhone",
   model: "16 Pro Max",
   description: "Description",
   imageUrl:"https://www.cnet.com/a/img/resize/928c0a57c0573d2148a2136c85f73ae195aad4ee/hub/2023/09/18/c17e2b8e-2c0d-4cd4-ba81-6803e624d843/iphone15-pro-4.jpg?auto=webp&fit=crop&height=1200&width=1200",
   price: 1500,
   quantity: 10,
   RAM:8,
   OS:"IOS",
   camera:12
  },
  {
    name: "Samsung",
    model: "S24 Ultra",
    description: "Description",
    imageUrl:"https://image-us.samsung.com/us/smartphones/galaxy-s24/all-gallery/01_E3_OnlineExclusive_TitaniumBlue_Lockup_1600x1200.jpg?$product-details-jpg$",
    price: 1200,
    quantity: 10,
    RAM:8,
    OS:"Android",
    camera:12
   }
]; 


const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardData, setCardData] = useState<Smartphone[]>(initialData);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    
    setIsModalVisible(false);
   
  };

  const handleFormSubmit = ( CardProduct: Smartphone) => {
    console.log("Handle submit")
    console.log(CardProduct)
    setCardData([...cardData, CardProduct]);
    console.log("final card data");
    console.log(cardData);

    setIsModalVisible(false);
  };

const emptyCard:Smartphone = {
  name: "",
  description: "",
  model: "",
  quantity: 0,
  price: 0,
  imageUrl: "",
  RAM: 0,
  OS: "",
  camera: 0
}

console.log(cardData);

  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
      <MenuContainer/>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} >
        <Button type="primary" onClick={showModal} style={{ marginBottom: 16, marginLeft:16}}>
            Add product
          </Button>
          <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card = {emptyCard} />
         
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <div style={{display:'flex',flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
        <ProductCard key={index} smartphone={card} />
      ))}</div>


          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
