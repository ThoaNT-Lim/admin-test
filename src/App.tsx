import { Layout } from "antd";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FooterCustom from "./components/layout/footer";
import HeaderCustom from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
import AppRouter from "./router";
import "antd/dist/antd.css";
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
          <Sider>
            <Sidebar />
          </Sider>
          <Layout>
            <Header>
              <HeaderCustom />
            </Header>
            <Content>
              {" "}
              <AppRouter />
            </Content>
            <Footer>
              <FooterCustom />
            </Footer>
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
