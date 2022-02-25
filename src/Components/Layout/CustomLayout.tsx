import { Layout } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { icons } from "../../helpers/icons";
import { RootState, setTheme } from "../../store/store";
import Header from "./Header";
import Sidebar from "./Sidebar";

const { Header: AntHeader, Sider, Content } = Layout;

interface CustomLayoutProps {}

const StyledLayout = styled(Layout)`
   height: 100%;
`;

const StyledAntHeader = styled(AntHeader)`
   padding: 0 30px !important;
   width: 100%;
   background: ${(p) => p.theme["main-background-color"]} !important;
   color: ${(p) => p.theme["main-text-color"]} !important;
   z-index: 1;
`;
const StyledSider = styled(Sider)<{ sidebarCollapsed: boolean }>`
   background: ${(p) => p.theme["main-background-color"]} !important;
   color: ${(p) => p.theme["main-text-color"]} !important;
   .ant-layout-sider-children {
      display: flex;
      flex-direction: column;
   }
   @media (max-width: 768px) {
      position: fixed;
      height: calc(100% - 64px);
      ${(p) => !p.sidebarCollapsed && `box-shadow: 0px 0px 0px 1000px rgba(0, 0, 0, 0.3)`}
   }
`;

const SidebarFooterWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding: 0.5rem;
   background: ${(p) => p.theme["main-background-color"]} !important;
   .logo {
      height: 18px;
      width: 18px;
      margin-right: 4px;
   }
   .right {
      display: flex;
      flex-direction: column;
      span {
         color: ${(p) => p.theme["text-color"]} !important;
         font-weight: bold;
         margin-bottom: 0.25rem;
      }
   }
`;

const IconWrapper = styled.div`
   display: flex;
   align-items: center;
`;

const SunWrapper = styled.div`
   color: ${(p) => p.theme["sun-color"]};
`;
const MoonWrapper = styled.div`
   color: ${(p) => p.theme["moon-color"]};
`;

const SlashWrapper = styled.div`
   color: ${(p) => p.theme["slash-color"]} !important;
`;
const StyledContent = styled(Content)`
   background: ${(p) => p.theme["background-color"]};
   color: ${(p) => p.theme["text-color"]};
`;
const SidebarFooter: React.FC = () => {
   const sidebarCollapsed = useSelector((state: RootState) => state.global.sidebarState);
   const dispatch = useDispatch();
   return (
      <SidebarFooterWrapper>
         {!sidebarCollapsed && (
            <div className="left">
               <img className="logo" src="https://www.pinksale.finance/static/media/pinkswap.a95de4f3.png"></img>
               <a href="#">PINKSALE</a>
            </div>
         )}
         <div className="right">
            {!sidebarCollapsed && <span>$117.33</span>}
            <IconWrapper>
               <SunWrapper onClick={() => dispatch(setTheme("light"))}>{icons.sun}</SunWrapper>
               <SlashWrapper>{icons.slash}</SlashWrapper>
               <MoonWrapper onClick={() => dispatch(setTheme("dark"))}>{icons.moon}</MoonWrapper>
            </IconWrapper>
         </div>
      </SidebarFooterWrapper>
   );
};

const CustomLayout: React.FC<CustomLayoutProps> = () => {
   const sidebarCollapsed = useSelector((state: RootState) => state.global.sidebarState);
   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
   useEffect(() => {
      const func = () => {
         setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", func);
      return () => {
         window.removeEventListener("resize", func);
      };
   }, []);
   return (
      <StyledLayout>
         <StyledAntHeader color="">
            <Header></Header>
         </StyledAntHeader>
         <Layout>
            <StyledSider
               sidebarCollapsed={sidebarCollapsed}
               collapsedWidth={windowWidth < 768 ? 0 : 80}
               width={200}
               trigger={null}
               zeroWidthTriggerStyle={{ display: "none" }}
               collapsible
               collapsed={sidebarCollapsed}
            >
               <Sidebar></Sidebar>
               <SidebarFooter></SidebarFooter>
            </StyledSider>
            <StyledContent>This is my content</StyledContent>
         </Layout>
      </StyledLayout>
   );
};

export default CustomLayout;
