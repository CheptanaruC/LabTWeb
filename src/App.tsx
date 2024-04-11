import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Card, Input, Button } from 'antd';

const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2 = [
  { key: '1', icon: <UserOutlined />, label: 'Card', content: SubmenuContent },
  { key: '2', icon: <LaptopOutlined />, label: '2', content: 'buttonul 2' },
  { key: '3', icon: <NotificationOutlined />, label: '3', content: 'buttonul 3' },
];

const initialFormData = {
  input1: '',
  input2: '',
  input3: ''
};

function SubmenuContent() {
  const [formData, setFormData] = useState(initialFormData);
  const [submittedData, setSubmittedData] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const { value } = e.target;
    // Validating for numbers (only for the first input)
    const newValue = field === 'input1' ? value.replace(/\D/g, '') : value.replace(/[0-9]/g, '');
    setFormData({
      ...formData,
      [field]: newValue
    });
  };

  const handleSubmit = () => {
    console.log('Submitted Data:', formData);
    setSubmittedData(formData);
    alert('Data has been successfully submitted!');
  };

  return (
    <Card title="Personal Information" style={{ backgroundColor: '#f0f2f5' }}>
      <div style={{ marginTop: '20px' }}>
        <Input
          placeholder="Phone Number"
          style={{ marginBottom: '10px' }}
          value={formData.input1}
          onChange={(e) => handleInputChange(e, 'input1')}
        />
        <Input
          placeholder="Last Name"
          style={{ marginBottom: '10px' }}
          value={formData.input2}
          onChange={(e) => handleInputChange(e, 'input2')}
        />
        <Input
          placeholder="First Name"
          style={{ marginBottom: '10px' }}
          value={formData.input3}
          onChange={(e) => handleInputChange(e, 'input3')}
        />
        <Button type="primary" onClick={handleSubmit}>Submit</Button>
      </div>
      {submittedData && (
        <div style={{ marginTop: '20px' }}>
          <h3>Submitted Data:</h3>
          <p>Phone Number: {submittedData.input1}</p>
          <p>Last Name: {submittedData.input2}</p>
          <p>First Name: {submittedData.input3}</p>
        </div>
      )}
    </Card>
  );
}

const App = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>('1');

  const handleMenuClick = (key: string) => {
    setSelectedMenu(key);
  };

  return (
    <Layout>
      <Layout.Header
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#001529', // Change header background color
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {items1.map(item => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      </Layout.Header>
      <Layout.Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Application</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: '24px 0',
          }}
        >
          <Layout.Sider
            style={{
              background: '#fff',
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{
                height: '100%',
              }}
            >
              {items2.map(item => (
                <Menu.Item key={item.key} icon={item.icon} onClick={() => handleMenuClick(item.key)}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Layout.Sider>
          <Layout.Content
            style={{
              padding: '0 24px',
              minHeight: 280,
            }}
          >
            {selectedMenu === '1' && <SubmenuContent />}
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  );
};

export default App;
