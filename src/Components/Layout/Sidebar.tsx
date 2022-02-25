import {
   CrownOutlined,
   FileTextOutlined,
   HomeOutlined,
   LockOutlined,
   RobotOutlined,
   RocketOutlined,
   SafetyOutlined,
   TwitterOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";
import SubMenu from "antd/lib/menu/SubMenu";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/store";

interface SidebarProps {}

interface SidebarItemSublink {
   text: string;
   link: string;
}
interface SidebarItem {
   text: string;
   icon: React.FC;
   link?: string;
   subLinks?: SidebarItemSublink[];
}

const sidebarItems: SidebarItem[] = [
   { text: "Home", icon: HomeOutlined, link: "/home" },
   {
      text: "Launchpads",
      icon: RocketOutlined,
      subLinks: [
         { text: "Create launchpad", link: "/create-launchpad" },
         { text: "Create fair lunch", link: "/create-launchpad" },
         { text: "Create Token", link: "/create-launchpad" },
         { text: "Launchpad list", link: "/create-launchpad" },
      ],
   },
   {
      text: "Pinklock",
      icon: LockOutlined,
      subLinks: [
         { text: "Create Lock", link: "/create-lock" },
         { text: "Token", link: "/token" },
         { text: "Liquidity", link: "/liquidity" },
      ],
   },
   {
      text: "Pink Airdrop",
      icon: LockOutlined,
      subLinks: [
         { text: "Create Airdrop", link: "/create-airdrop" },
         { text: "Airdrop List", link: "/airdrop-list" },
      ],
   },
   { text: "Leaderboard", icon: CrownOutlined, link: "/leaderboard" },
   { text: "Pink Anti-bot", icon: SafetyOutlined, link: "/pink-anti-bot" },
   { text: "Pools Alert", icon: RobotOutlined, link: "/pools-alert" },
   { text: "KYC & Audit", icon: FileTextOutlined, link: "/kyc" },
   { text: "Docs", icon: FileTextOutlined, link: "/home" },
   {
      text: "Telegram",
      icon: LockOutlined,
      subLinks: [
         { text: "English", link: "/english" },
         { text: "简体中文", link: "/english" },
         { text: "日本語", link: "/english" },
      ],
   },
   { text: "Twitter", icon: TwitterOutlined, link: "/twitter" },
];

const StyledMenu = styled(Menu)`
   height: 100%;
   border: none;
   background: ${(p) => p.theme["main-background-color"]} !important;
   color: ${(p) => p.theme["main-text-color"]} !important;
   overflow-y: auto;
   overflow-x: hidden;

   .-title-content,
   .ant-menu-title-content {
      font-size: 16px !important;
      color: ${(p) => p.theme["main-text-color"]} !important;
   }
   .ant-menu-item::after {
      border-right: 3px solid #f95192 !important;
   }
   .ant-menu-submenu:hover {
      .ant-menu-submenu-title {
         color: #f95192 !important;

         .ant-menu-submenu-arrow {
            color: ${(p) => p.theme["main-text-color"]} !important;
         }
      }
   }
   .ant-menu-submenu-active {
      color: ${(p) => p.theme["main-text-color"]} !important;
   }
   .ant-menu-submenu-selected {
      .-title-content {
         color: #f95192 !important;
      }
      color: #f95192 !important;
   }
   div[role="menuitem"]:hover,
   .ant-menu-item:hover {
      .ant-menu-title-content,
      .-title-content {
         color: #f95192 !important;
      }

      color: #f95192 !important;
   }

   .ant-menu-sub.ant-menu-inline {
      background: ${(p) => p.theme["background-color"]};
   }
   .ant-menu-item-selected {
      background: ${(p) => p.theme["active-menu-item-bg"]} !important;
      color: ${(p) => p.theme["active-menu-item-text"]} !important;
      .anticon {
         color: ${(p) => p.theme["active-menu-item-text"]} !important;
      }
      .-title-content.-title-content,
      .ant-menu-title-content.ant-menu-title-content {
         color: ${(p) => p.theme["active-menu-item-text"]} !important;
      }
   }
`;

const Sidebar: React.FC<SidebarProps> = () => {
   const collapsed = useSelector((state: RootState) => state.global.sidebarState);

   return (
      <StyledMenu mode="inline" inlineCollapsed={collapsed}>
         {sidebarItems.map((item, i) => (
            <>
               {item.subLinks ? (
                  <SubMenu icon={<item.icon></item.icon>} key={item.text} title={item.text}>
                     {item.subLinks.map((x, i) => (
                        <Menu.Item title={x.text} key={x.text}>
                           <div>{x.text}</div>
                        </Menu.Item>
                     ))}
                  </SubMenu>
               ) : (
                  <Menu.Item icon={<item.icon></item.icon>} key={item.text}>
                     {item.text}
                  </Menu.Item>
               )}
            </>
         ))}
      </StyledMenu>
   );
};
export default Sidebar;
