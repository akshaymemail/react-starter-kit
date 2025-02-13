import { Layout } from "antd";
import React, { memo } from "react";
const { Footer } = Layout;
function AppFooter() {
  return (
    <Footer>
      Made with Love ©{new Date().getFullYear()} Created by @akshaymemail
    </Footer>
  );
}

export default memo(AppFooter);
