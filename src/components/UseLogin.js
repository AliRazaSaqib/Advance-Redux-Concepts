/** @format */

import { useState } from "react";
import "../App.css";
import { Form, Input, Button, Checkbox, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UseLogin() {
  // const [isAuth, setIsAuth] = useState(initialValue);
  const navigate = useNavigate();
  // const getLocalStorageData = JSON.parse(localStorage.getItem("userLogin"));
  // const { useremail, password } = getLocalStorageData;
  const [error, setError] = useState(false);
  const { useremail, password } = useSelector(
    (state) => state.auth.currentUser.values
  );

  const onLogin = (values) => {
    try {
      if (values.useremail === useremail && values.password === password) {
        setTimeout(() => {
          navigate("/mainComponent");
        }, 1000);
      } else {
        setError(true);
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="login-warp">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onLogin}
      >
        <Form.Item
          name="useremail"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            type="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or
          <Link to="/signup">
            <span> register now!</span>
          </Link>
        </Form.Item>
        {error ? (
          <Alert message="Wrong Information" type="warning" showIcon closable />
        ) : null}
      </Form>
    </div>
  );
}
