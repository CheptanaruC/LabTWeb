import { Menu } from 'antd';
import { UserOutlined, AppstoreOutlined, ShopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuContainer = () => {
  const items = [
    { path: '/', icon: <UserOutlined />, label: 'My Cabinet' },
    { path: '/products', icon: <AppstoreOutlined />, label: 'Products' },
    { path: '/about-us', icon: <ShopOutlined />, label: 'About Us' }
  ];

  return (
    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
      {items.map((item, index) => (
        <Menu.Item key={String(index + 1)} icon={item.icon}>
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuContainer;
