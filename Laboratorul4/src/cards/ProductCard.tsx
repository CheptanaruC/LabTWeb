import React from 'react';
import { Card } from 'antd';
import Smartphone from '../models/Smartphone';

const { Meta } = Card;


interface ProductCardProps {
  smartphone: Smartphone;
}

const ProductCard: React.FC<ProductCardProps> = ({ smartphone }) => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt={smartphone.name} src={smartphone.imageUrl} />}
  >
    <Meta title={smartphone.name} description={smartphone.description} />
    <div>
      <p>Model: {smartphone.model}</p>
      <p>Price: {smartphone.price}</p>
      <p>Quantity: {smartphone.quantity}</p>
      <p>RAM: {smartphone.RAM} GB</p>
      <p>OS: {smartphone.OS}</p>
      <p>Camera: {smartphone.camera} Mgpx</p>
    </div>
  </Card>
);

export default ProductCard;
