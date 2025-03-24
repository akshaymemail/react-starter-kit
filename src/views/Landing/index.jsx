import React, { useCallback } from "react";
import AppLayout from "@layouts";
import { Button, Flex, Typography } from "antd";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const handleSignin = useCallback(() => {
    navigate("/auth/signin");
  }, []);
  const handleSignup = useCallback(() => {
    navigate("/auth/signup");
  }, []);
  return (
    <AppLayout footer>
      <Flex vertical gap={100}>
        <Flex vertical>
          <Typography.Title className="text-center">
            React Starter Kit
          </Typography.Title>
          <Typography.Paragraph className="text-center">
            Starter kit 5.0
          </Typography.Paragraph>
        </Flex>
        <Flex gap={20} justify="center">
          <Button type="primary" onClick={handleSignup}>
            Signup
          </Button>
          <Button type="default" onClick={handleSignin}>
            Login
          </Button>
        </Flex>
      </Flex>
    </AppLayout>
  );
}

export default Welcome;
