import { Layout } from "antd";
import "antd/dist/antd.min.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import HeaderCustom from "./components/layout/header";
import Sidebar from "./components/layout/sidebar";
import AppRouter from "./router";
const { Header, Sider, Content } = Layout;

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
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
