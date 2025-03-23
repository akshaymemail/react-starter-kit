import { Flex, Layout, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { Footer } = Layout;

function AppFooter() {
  return (
    <Footer className="app-footer">
      <div className="app-footer-content">
        <Flex gap={32} align="center">
          <Typography.Text>
            &copy; Starter Kit 2025, All rights reserved.
          </Typography.Text>
          <Link className="underlined-link" to="#!">
            Terms & Conditions
          </Link>
          <Link className="underlined-link" to="#!">
            Privacy Policy
          </Link>
        </Flex>
      </div>
    </Footer>
  );
}

export default AppFooter;
