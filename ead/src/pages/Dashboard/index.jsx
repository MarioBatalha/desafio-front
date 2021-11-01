import { useState, useEffect } from "react";
import { Layout, Menu, Avatar, Badge, Image } from "antd";
import axios from "axios";
import {
  AppstoreFilled,
  SettingFilled,
  MessageFilled,
  SearchOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

import "./style.scss";
import { Loading } from '../../components/Loading';

const { Header, Content, Footer, Sider } = Layout;

export const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const url = "https://desafio.eadplataforma.com/api/1/users";
  const token = "8a71be68b6d578126db3b83c9a503431";
  let fullYear = new Date().getFullYear();

  const handleGetData = async () => {
    setLoading(true);
    try {
       await axios('https://randomuser.me/api/').then(user => {
        setLoading(false);
        setUser(user)
      });
      console.log(user);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    //handleGetData();
  });

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (user.length === 0) {
    return (
      <>
        <div className="prev">
          <h2>Nenhum usuário encontrado</h2>
          <button onClick={handleGetData} className="container-btn">
            Actualizar
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <Layout className="content">
        <Sider breakpoint="lg" collapsedWidth="0" className="sider">
          <Content className="sidebar">
            <Menu
              theme="light"
              mode="inline"
              defaultSelectedKeys={["4"]}
              style={{ color: "#B3BAB8" }}
            >
              <Image
                height={100}
                width={200}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP02aG9ZVvHmqgT5ziWEMPRwuMhfQ41j-G7B6beeRi0I0nE80TVt26Dj4wyxRuaOX6iRE&usqp=CAU"
                alt="EAD plataforma"
              />
              <Menu.Item
                key="1"
                icon={
                  <AppstoreFilled style={{ color: "#20BC9B", fontSize: 30 }} />
                }
              >
                Painel
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={
                  <SettingFilled style={{ color: "#20BC9B", fontSize: 30 }} />
                }
              >
                Configurações
              </Menu.Item>
            </Menu>
            <div>
              <Content className="sidebar-bottom">
                <Footer
                  style={{
                    background: "#20BC9B",
                    color: "#FFF",
                    fontSize: 13,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MessageFilled
                    style={{ color: "#FFF", fontSize: 30, marginRight: 5 }}
                  />
                  Suporte
                </Footer>
              </Content>
            </div>
          </Content>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0, background: "#FFF" }}
          >
            <Content className="content-header">
                <Input
                  addonBefore={<SearchOutlined style={{ color: "#6E6E6E" }} />}
                  placeholder="Buscar por clientes"
                  style={{ width: "100rem", borderRadius: 25 }}
                />
              <div className="content-right">
                <Badge dot>
                  <BellOutlined
                    style={{
                      color: "#6E6E6E",
                      fontSize: 30,
                    }}
                  />
                </Badge>
                <Avatar src="https://joeschmoe.io/api/v1/random"  style={{
                      fontSize: 50,
                      marginLeft: "1rem",
                    }}/>
              </div>
            </Content>
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
