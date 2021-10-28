import { Layout, Menu, Image } from "antd";
import {
  AppstoreFilled,
  SettingFilled,
  MessageFilled,                                    
} from "@ant-design/icons";

import "./style.scss";
const { Header, Content, Footer, Sider } = Layout;

export const Dashboard = () => {
  let fullYear = new Date().getFullYear();
  return (
    <>
      <Layout className="content">
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          className="sider"
        >
          <Content  className="sidebar">
            <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]} style={{ color: "#B3BAB8"}}>
            <Image height={100} width={200} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP02aG9ZVvHmqgT5ziWEMPRwuMhfQ41j-G7B6beeRi0I0nE80TVt26Dj4wyxRuaOX6iRE&usqp=CAU" alt="EAD plataforma" />
              <Menu.Item key="1" icon={<AppstoreFilled  style={{ color: "#20BC9B", fontSize: 30}} />}>
                Painel 
              </Menu.Item>
              <Menu.Item key="2" icon={<SettingFilled style={{ color: "#20BC9B", fontSize: 30}} />}>
                Configurações
              </Menu.Item>
            </Menu>
            <div>
              <Content className="sidebar-bottom">
                <Footer style={{ background: "#20BC9B", color: "#FFF", fontSize: 13, fontWeight: "bold", justifyContent: "center", alignItems: "center" }}>
                  <MessageFilled style={{ color: "#FFF", fontSize: 30, marginRight: 5}} />
                  Suporte
                </Footer>
              </Content>
            </div>
          </Content>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0, background: "#FFF"}}>
              <Content>Menu</Content>
            </Header>
          <Content className="container">
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              content
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Created by © Mário Batalha - {fullYear}
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};
