/** @format */

import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout, Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useSelector, useDispatch } from "react-redux";
import { authLogout } from "../redux/action/auth";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(authLogout());
    navigate("/");
  };
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo">
            <img src="/logo.png" />
          </div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["6"]}>
            <Menu.Item key="1">Item-1</Menu.Item>
            <Menu.Item>Item-2</Menu.Item>
            <Menu.Item>Item-3</Menu.Item>
            <Menu.Item>Item-4</Menu.Item>
            <Menu.Item>Item-5</Menu.Item>
            <Menu.Item>Item-6</Menu.Item>
            <Menu.Item style={{ marginLeft: "auto" }} onClick={handleLogout}>
              Logout
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default HeaderComponent;
