"use client";
import React, { useState } from "react";
import { Layout, Menu, Drawer, Button, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;
const { useBreakpoint } = Grid;

const HeaderLayout = () => {
  const [open, setOpen] = useState(false);
  const screens = useBreakpoint();

  const menuItems = [
    {
      key: "services",
      label: "Services",
      onClick: () =>
        document
          .getElementById("services")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      key: "contactUs",
      label: "Contact Us",
      onClick: () =>
        document
          .getElementById("contactUs")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      key: "aboutUs",
      label: "About Us",
      onClick: () =>
        document
          .getElementById("aboutUs")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      key: "careers",
      label: "Careers",
      onClick: () =>
        document
          .getElementById("careers")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <>
      <div className="bg-[#3AA66A] text-white">
        <Header className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between bg-[#3AA66A]">
          {/* Logo */}
          <div className="text-white text-2xl font-bold">
            <a href="/" className="hover:text-yellow-500">
              <img
                src="/logo_handyman.jpg"
                alt="Ace Handyman Logo"
                className="h-12 inline-block mr-2"
              />
            </a>
          </div>

          {/* Desktop Menu */}
          {screens.md ? (
            <Menu
              mode="horizontal"
              items={menuItems}
              className="bg-transparent flex-1 justify-end text-white font-medium bg-[#3AA66A]"
              selectable={false}
              theme="dark"
            />
          ) : (
            <Button
              icon={<MenuOutlined className="text-white text-lg" />}
              type="text"
              onClick={() => setOpen(true)}
            />
          )}
        </Header>
      </div>

      {/* Mobile Drawer Menu */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          selectable={false}
          onClick={() => setOpen(false)}
        />
      </Drawer>
    </>
  );
};

export default HeaderLayout;
