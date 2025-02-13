import React, { Fragment, memo } from "react";
import {
  Avatar,
  Button,
  Col,
  Drawer,
  Flex,
  Grid,
  Layout,
  Menu,
  Row,
  Space,
  theme,
  Typography,
} from "antd";
import {
  BellOutlined,
  MenuUnfoldOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useCallback } from "react";
import navItems from "@db/navigation";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;
const { useBreakpoint } = Grid;
const { useToken } = theme;

function AppHeader() {
  const { token } = useSelector((state) => state.auth);
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const { token: ThemeToken } = useToken();
  function handleNavigate(nav) {
    navigate(nav.path);
  }
  const showDrawer = useCallback(() => setIsDrawerVisible(true), []);
  const closeDrawer = useCallback(() => setIsDrawerVisible(false), []);

  return (
    <Fragment>
      <Header
        className="app-header"
        style={{ backgroundColor: ThemeToken.colorBgBase }}
      >
        <Row justify="space-between" align="middle">
          <Col flex={1}>
            {!screens.lg && (
              <Button type="text" onClick={showDrawer}>
                <MenuUnfoldOutlined />
              </Button>
            )}
            <Space>
              <Typography.Text>React Starter Kit</Typography.Text>
              <Space size={10}>
                {screens.lg && token && (
                  <Fragment>
                    {navItems.map((item) => {
                      function onClick(e) {
                        handleNavigate(item);
                      }
                      return (
                        <Button type="text" key={item.id} onClick={onClick}>
                          {item.label}
                        </Button>
                      );
                    })}
                  </Fragment>
                )}
              </Space>
            </Space>
          </Col>
          {token && (
            <Col>
              <Flex>
                <Button type="text" shape="circle">
                  <BellOutlined />
                </Button>
                <Button type="text" shape="circle">
                  <QuestionCircleOutlined />
                </Button>
                <Avatar />
              </Flex>
            </Col>
          )}
        </Row>
      </Header>

      <Drawer
        title="Navigation"
        placement="left"
        onClose={closeDrawer}
        open={isDrawerVisible}
      >
        <Menu mode="inline" items={navItems} onClick={handleNavigate} />
      </Drawer>
    </Fragment>
  );
}

export default memo(AppHeader);
