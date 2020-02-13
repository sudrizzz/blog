import React from "react";
import { Menu, Icon, Layout } from "antd";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  return (
    <div className="sideBar">
      {localStorage.getItem("token") !== null && (
        <Sider trigger={null} collapsible>
          <Menu mode="inline">
            <SubMenu
              key="1"
              title={
                <span>
                  <Icon type="setting" />
                  <span>账户设置&nbsp;&nbsp;</span>
                </span>
              }
            >
              <Menu.Item>信息更新&nbsp;&nbsp;</Menu.Item>
              <Menu.Item>修改密码&nbsp;&nbsp;</Menu.Item>
            </SubMenu>
            <SubMenu
              key="2"
              title={
                <span>
                  <Icon type="file-text" />
                  <span>文章管理&nbsp;&nbsp;</span>
                </span>
              }
            ></SubMenu>
            <SubMenu
              key="3"
              title={
                <span>
                  <Icon type="tags" />
                  <span>分类维护&nbsp;&nbsp;</span>
                </span>
              }
            ></SubMenu>
          </Menu>
        </Sider>
      )}
    </div>
  );
};

export default SideBar;
