"use client";

import React, { ReactNode, useState } from "react";
import {
  BellOutlined,
  FileDoneOutlined,
  LoginOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  ProductOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Flex,
  Layout,
  Menu,
  MenuProps,
  theme,
} from "antd";
import { BadgePercent } from "lucide-react";
import { NextRouter } from "next/router";
import Link from "next/link";
import { Logo } from "../cards";

// Updated sidebarItems with proper nested structure
const sidebarItems = [
  {
    key: "/",
    icon: <PieChartOutlined />,
    label: "Dashboard",
    path: "/",
  },
  {
    key: "/account-details",
    icon: <TeamOutlined />,
    label: "Accounts Details",
    path: "/account-details",
  },
  {
    key: "/service",
    icon: <ProductOutlined />,
    label: "Service",
    path: "/service",
  },
  {
    key: "/offer-review",
    icon: <BadgePercent className="text-sm" />,
    label: "Offer Review",
    path: "/offer-review",
  },

  {
    key: "/disputed-reviews",
    icon: <FileDoneOutlined />,
    label: "Disputed Reviews",
    path: "/disputed-reviews",
  },
  {
    key: "/Setting",
    icon: <SettingOutlined />,
    label: "Setting",
    children: [
      {
        key: "/privacy-policy",
        icon: <SettingOutlined />,
        label: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        key: "/terms-use",
        icon: <SettingOutlined />,
        label: "Terms of use",
        path: "/terms-use",
      },
    ],
  },
  {
    key: "logout",
    icon: <LoginOutlined />,
    label: "Logout",
    path: "",
    // onClick: HandleLogOut,
  },
];

const { Header, Sider, Content } = Layout;

export const DashboardLayout = ({
  children,
  router,
}: {
  children: ReactNode;
  router: NextRouter;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { pathname } = router;

  // Function to recursively transform menu items
  const transformMenuItem = (item: any) => {
    const transformed = { ...item };

    if (item.path) {
      transformed.label = <Link href={item.path}>{item.label}</Link>;
    }

    if (item.children) {
      transformed.children = item.children.map(transformMenuItem);
    }

    return transformed;
  };

  const transformedSidebarItems = sidebarItems.map(transformMenuItem);

  const items: MenuProps["items"] = [
    {
      key: "user-profile-link",
      label: "profile",
      icon: <UserOutlined />,
      onClick: () => {
        router.push("/profile");
      },
    },
    {
      key: "user-settings-link",
      label: "settings",
      icon: <SettingOutlined />,
      onClick: () => {
        router.push("/privacy-policy");
      },
    },
    {
      type: "divider",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }} className="app-layout">
      <Sider
        // collapsibles
        breakpoint="md"
        // width={320}
        collapsed={collapsed}
        style={{
          paddingInline: `${!collapsed ? "10px" : "4px"}`,
          paddingBlock: "30px",
          backgroundColor: "white",
          overflow: "auto",
        }}
        theme="light"
        onBreakpoint={(broken) => {
          console.log({ broken });
          setCollapsed(broken);
        }}
        onCollapse={() => {
          // console.log(collapsed, type);
        }}
        className={collapsed ? "" : "myClass"}
      >
        <div
          className="demo-logo-vertical"
          style={{
            height: "200px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          items={transformedSidebarItems}
        />
      </Sider>

      {/* Rest of your layout code remains the same */}
      <Layout>
        <Header
          style={{
            padding: "12px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <h2>Dashboard</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 25 }}>
              <div
                style={{ fontSize: 18, display: "flex", alignItems: "center" }}
              >
                <Link href="/notification">
                  <Badge count={5} offset={[0.1, 5]}>
                    <BellOutlined
                      style={{
                        border: "1px solid #efefef",
                        padding: "8px",
                        borderRadius: "50%",
                      }}
                    />
                  </Badge>
                </Link>
              </div>
              <Dropdown menu={{ items }} trigger={["click"]}>
                <Flex>
                  <Avatar
                    style={{ backgroundColor: "#87d068" }}
                    icon={<UserOutlined />}
                    size={40}
                  />
                </Flex>
              </Dropdown>
            </div>
            <p style={{ fontWeight: 600 }}>Natederwin</p>
          </div>
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
            background: "#CACACA",
            borderTopLeftRadius: 10,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
