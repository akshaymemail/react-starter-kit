import React, { memo, useCallback, useMemo, useState } from "react";
import {
  Avatar,
  Button,
  Drawer,
  Dropdown,
  Flex,
  Grid,
  Layout,
  Menu,
  Popconfirm,
  Space,
  Tooltip,
} from "antd";
import {
  BellOutlined,
  LogoutOutlined,
  MenuUnfoldOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import navItems from "@db/navigation";
import Wrapper from "@components/Wrapper";

const { Header } = Layout;
const { useBreakpoint } = Grid;

function AppHeader() {
  const { token } = useSelector((state) => state.auth);
  const screens = useBreakpoint();
  const navigate = useNavigate();
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleNavigate = useCallback((path) => navigate(path), [navigate]);

  const showDrawer = useCallback(() => setIsDrawerVisible(true), []);
  const closeDrawer = useCallback(() => setIsDrawerVisible(false), []);

  const menuItems = useMemo(
    () =>
      navItems.map((item) => ({
        key: item.id,
        label: (
          <Button type="text" onClick={() => handleNavigate(item.path)}>
            {item.label}
          </Button>
        ),
      })),
    [handleNavigate]
  );

  return (
    <>
      <Header className="app-header">
        <Flex
          align="center"
          justify="space-between"
          className="app-header-content"
        >
          {!screens.lg && token && (
            <Button type="text" onClick={showDrawer}>
              <MenuUnfoldOutlined />
            </Button>
          )}
          <Flex gap={10} align="center">
            <Link to="/" style={{ display: "flex" }}>
              <img
                src={import.meta.env.VITE_LOGO}
                alt="logo"
                className="logo"
              />
            </Link>
            {screens.lg && token && <NavButtons items={menuItems} />}
          </Flex>
          <ProfileSection screens={screens} token={token} />
        </Flex>
      </Header>

      <Drawer
        title="Starter Kit"
        placement="left"
        onClose={closeDrawer}
        open={isDrawerVisible}
      >
        <Menu mode="inline" items={menuItems} />
      </Drawer>
    </>
  );
}

const NavButtons = memo(({ items }) => (
  <>
    {items.map(({ key, label }) => (
      <React.Fragment key={key}>{label}</React.Fragment>
    ))}
  </>
));

const ProfileSection = memo(({ screens, token }) => {
  const navigate = useNavigate();
  if (!token) return <Wrapper style={{ width: 50 }}></Wrapper>;

  return (
    <Flex gap={10}>
      {screens.lg && (
        <>
          <Tooltip title="Notifications">
            <Button type="text" shape="circle">
              <BellOutlined />
            </Button>
          </Tooltip>
          <Tooltip title="Settings">
            <Button type="text" shape="circle">
              <SettingOutlined />
            </Button>
          </Tooltip>
          <Tooltip title="Logout">
            <Popconfirm
              title="Are you sure you want to log out?"
              onConfirm={() => navigate("/auth/logout")}
              okText="Yes"
              cancelText="No"
            >
              <Button type="text" shape="circle">
                <LogoutOutlined />
              </Button>
            </Popconfirm>
          </Tooltip>
        </>
      )}
      {screens.lg ? (
        <Tooltip title="Profile">
          <Button type="text" shape="circle">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Button>
        </Tooltip>
      ) : (
        <Dropdown
          trigger={["click"]}
          menu={{
            items: [
              { key: "1", icon: <UserOutlined />, label: "Profile" },
              { key: "2", icon: <BellOutlined />, label: "Notifications" },
              { key: "3", icon: <SettingOutlined />, label: "Settings" },
              {
                key: "4",
                icon: <LogoutOutlined />,
                label: (
                  <Popconfirm
                    title="Are you sure you want to log out?"
                    onConfirm={() => navigate("/auth/logout")}
                    okText="Yes"
                    cancelText="No"
                  >
                    Logout
                  </Popconfirm>
                ),
              },
            ],
          }}
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </Dropdown>
      )}
    </Flex>
  );
});

export default memo(AppHeader);
