import React from "react";
import AppLayout from "@layouts";
import packageJson from "../../../package.json";
import { Flex, Typography } from "antd";

function Home() {
  return (
    <AppLayout>
      <Flex
        align="center"
        justify="center"
        style={{ minHeight: `calc(100dvh - var(--header-height))` }}
      >
        <Flex vertical className="text-center">
          <Typography.Title>Let's Build!</Typography.Title>
          <Typography.Text>App Version {packageJson.version}</Typography.Text>
        </Flex>
      </Flex>
    </AppLayout>
  );
}

export default Home;
