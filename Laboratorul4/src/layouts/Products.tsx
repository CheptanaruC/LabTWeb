// import MainLayout from "./MainLayout";
// import FooterComponent from "./FooterComponent";
// import ProductCard from "../ProductCard";
// import HeaderComponent from "./HeaderComponent";
// import Product from "../Product";
// import theme from "antd/es/theme";
// import { useState } from "react";
// import { Button } from "antd";
// import ModalForm from "../ModalForm";
// import Layout, { Content } from "antd/es/layout/layout";

// const initialData:Product[] = [
//     {
//      name: "iPhone",
//      model: "15 Pro",
//      description: "Description",
//      imageUrl:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913073944251820/231108150114973426.png@webp",
//      price: 1300,
//      quantity: 10
//     },
//     {
//       name: "iPhone",
//       model: "15 Pro",
//       description: "Description",
//       imageUrl:"https://cdn1.it4profit.com/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fill:540/bg:f6f6f6/q:100/plain/s3://catalog-products/230913073944251820/231108150114973426.png@webp",
//       price: 1300,
//       quantity: 10
//      }
//   ]; 

// const Products: React.FC = () => {
//     const {
//         token: { colorBgContainer, borderRadiusLG },
//       } = theme.useToken();
    
//       const [isModalVisible, setIsModalVisible] = useState(false);
//       const [cardData, setCardData] = useState<Product[]>(initialData);
//       const showModal = () => {
//         setIsModalVisible(true);
//       };
//       const handleCancel = () => {
        
//         setIsModalVisible(false);
       
//       };
    
//       const handleFormSubmit = ( CardProduct: Product) => {
//         console.log("Handle submit")
//         console.log(CardProduct)
//         setCardData([...cardData, CardProduct]);
//         console.log("final card data");
//         console.log(cardData);
    
//         setIsModalVisible(false);
//       };
    
//     const emptyCard:Product = {
//       name: "",
//       description: "",
//       model: "",
//       quantity: 0,
//       price: 0,
//       imageUrl: ""
    
//     }
    
//     console.log(cardData);
    
//     return (
//         <MainLayout>
//             <Layout style={{ marginLeft: 200 }}>
//                     {/* <HeaderComponent>
//                     <Button type="primary" onClick={showModal} style={{ marginBottom: 16, marginLeft:16}}>
//                         Add product
//                     </Button>
//                     <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card = {emptyCard} />
                    
//                     </HeaderComponent> */}
//                 <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
//                 <div
//                     style={{
//                     padding: 24,
//                     textAlign: 'center',
//                     background: colorBgContainer,
//                     borderRadius: borderRadiusLG,
//                     }}
//                 >
//                     <div style={{display:'flex',flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
//                 <ProductCard key={index} productModel={card} />
//             ))}</div>


//                 </div>

//                 </Content>
//                 <FooterComponent/>
//             </Layout>
//         </MainLayout>
//     )};

// export default Products;