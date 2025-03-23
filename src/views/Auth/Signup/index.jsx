import React, { useEffect } from "react";
import { Button, Card, Checkbox, Flex, Form, Input } from "antd";
import AuthAPI from "@redux/features/auth/api";
import { useDispatch, useSelector } from "react-redux";
import AppLayout from "@layouts";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { token, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    dispatch(AuthAPI.login(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);
  return (
    <AppLayout>
      <Card
        title="Create new account"
        style={{ maxWidth: 576, margin: "auto" }}
      >
        <Form
          name="signup"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input placeholder="Type your name" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input placeholder="Type your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Type your password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </AppLayout>
  );
}
export default Signup;
