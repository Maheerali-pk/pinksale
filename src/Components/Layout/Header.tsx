import { MenuFoldOutlined, MenuOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, PageHeader } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { icons } from "../../helpers/icons";
import { RootState, setSidebarState } from "../../store/store";
import ConnectModel from "./ConnectModel";
import NetworkModel from "./NetworkModel";

interface HeaderProps {}
const StyledPageHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

const IconWrapper = styled.div`
   cursor: pointer;
   font-size: 1.25rem !important;
`;

const Logo = styled.img`
   width: 36px;
`;

const NavbarSubWrapper = styled.div`
   display: flex;
   align-items: center;
   gap: 0.65rem;
`;
const NavbarBtn = styled(Button)`
   border: none;
   outline: none;
   border-radius: 16px;
   cursor: pointer;
   font-size: 16px;
   font-weight: 600;
   letter-spacing: 0.03em;
   line-height: 1;
   outline: 0;
   height: 40px;
   padding: 0 16px;
   line-height: 40px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: var(--red-button-bg-color);
   color: var(--red-button-text-color);
   background: ${(p) => p.theme["red-button-bg-color"]};
   color: ${(p) => p.theme["red-button-text-color"]};
   &:hover,
   &:focus {
      background: ${(p) => p.theme["red-button-bg-color"]} !important;
      color: ${(p) => p.theme["red-button-text-color"]} !important;
   }
`;
const NetworkBtn = styled(NavbarBtn)`
   background: ${(p) => p.theme["network-button-bg-color"]};
   color: ${(p) => p.theme["text-color"]};
   &:hover,
   &:focus {
      background: ${(p) => p.theme["network-button-bg-color"]} !important;
      color: ${(p) => p.theme["text-color"]} !important;
   }
   span {
      margin-left: 0.5rem;
   }
   img {
      height: 18px;
   }
   @media (max-width: 768px) {
      span {
         display: none;
      }
   }
`;
const CreateBtn = styled(NavbarBtn)`
   span {
      margin-left: 0.25rem !important;
   }
   @media (max-width: 768px) {
      background: ${(p) => p.theme["network-button-bg-color"]};
      span {
         display: none;
      }
   }
`;
const ButtonWrapper = styled(NavbarSubWrapper)`
   gap: 0.5rem;
`;

const StyledDropdown = styled(Menu)`
   background: ${(p) => p.theme["background-color"]};
   .ant-dropdown-menu-item {
      color: #f95192 !important;
   }
   .ant-dropdown-menu-item:hover {
      color: ${(p) => p.theme["text-color"]} !important;

      background: ${(p) => p.theme["background-color"]};
   }
`;

const menu = (
   <StyledDropdown>
      <Menu.Item>Launch Pad</Menu.Item>
      <Menu.Item>Fair Launch</Menu.Item>
      <Menu.Item>Token</Menu.Item>
   </StyledDropdown>
);

const Header: React.FC<HeaderProps> = () => {
   const sidebarCollapsed = useSelector((state: RootState) => state.global.sidebarState);
   const dispatch = useDispatch();
   const [showNetworkModel, setShowNetworkModel] = useState(false);
   const [showConnectModel, setShowConnectModel] = useState(false);
   return (
      <StyledPageHeader>
         <NetworkModel visible={showNetworkModel} setVisible={setShowNetworkModel}></NetworkModel>
         <ConnectModel visible={showConnectModel} setVisible={setShowConnectModel}></ConnectModel>

         <NavbarSubWrapper>
            <IconWrapper onClick={() => dispatch(setSidebarState(!sidebarCollapsed))}>
               {sidebarCollapsed ? <MenuOutlined></MenuOutlined> : <MenuFoldOutlined></MenuFoldOutlined>}
            </IconWrapper>
            <Logo
               className="hide-on-mobile"
               src="https://www.pinksale.finance/static/media/pinkswap.a95de4f3.png"
            ></Logo>
            <span className="hide-on-mobile">PinkSale</span>
         </NavbarSubWrapper>
         <ButtonWrapper>
            <Dropdown overlay={menu}>
               <CreateBtn>
                  {icons.plusIcon} <span>Create</span>
               </CreateBtn>
            </Dropdown>
            <NetworkBtn onClick={() => setShowNetworkModel(true)}>
               <img src="https://www.pinksale.finance/static/media/ic-bsc.419dfaf2.png"></img> <span>BSC MAINNET</span>
            </NetworkBtn>
            <NavbarBtn onClick={() => setShowConnectModel(true)}>Connect</NavbarBtn>
         </ButtonWrapper>
      </StyledPageHeader>
   );
};

export default Header;
