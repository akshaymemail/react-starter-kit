import React, { Fragment } from "react";
import AppHeader from "@components/Header";
import AppFooter from "@components/Footer";
import { Layout } from "antd";
import Constants from "@constants";
const { Content } = Layout;
const styles = {
  layout: () => ({
    width: "100%",
    maxWidth: Constants.APP.MAX_WIDTH,
    margin: "auto",
    backgroundColor: "#fff",
    paddingTop: 65,
  }),

  content: (footer) => ({
    padding: "10px 20px",
    paddingTop: 10,
    minHeight: footer ? `calc(100dvh - 130px)` : `calc(100dvh - 64px)`,
  }),
};

function AppLayout({ children, footer }) {
  return (
    <Fragment>
      <AppHeader />
      <Layout style={styles.layout()}>
        <Content style={styles.content(footer)}>{children}</Content>
      </Layout>
      {footer && <AppFooter />}
    </Fragment>
  );
}

export default AppLayout;
