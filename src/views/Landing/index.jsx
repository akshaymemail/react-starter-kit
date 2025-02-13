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
            Flexible theme customization
          </Typography.Title>
          <Typography.Paragraph className="text-center">
            Starter kit 5.0 enable extendable algorithm, make custom theme
            easier
          </Typography.Paragraph>
        </Flex>
        <Flex gap={20} justify="center">
          <Button type="primary" onClick={handleSignup}>
            Get Started
          </Button>
          <Button type="default" onClick={handleSignin}>
            Alread Have Account
          </Button>
        </Flex>
      </Flex>
    </AppLayout>
  );
}

export default Welcome;
