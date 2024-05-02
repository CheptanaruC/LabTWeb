import {Layout, theme } from 'antd';
import Sider from 'antd/es/layout/Sider';
import MenuContainer from './MenuContainer';
import FooterComponent from './FooterComponent';
import { Content } from 'antd/es/layout/layout';
import HeaderComponent from './HeaderComponent';

const MainLayout: React.FC = ({children}:any) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
      <Layout hasSider>
        <Sider
          style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
        >
         

          <div className="demo-logo-vertical" />
        <MenuContainer/>
        </Sider>
        {children}
        <Layout style={{ marginLeft: 200 }}>
        <HeaderComponent/>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
             <h3>My cabinet</h3>


          </div>

        </Content>
        <FooterComponent/>
      </Layout>
        
      </Layout>
    );
  };
  
  export default MainLayout;