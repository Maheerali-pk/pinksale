import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Components/Layout/Sidebar";
import "antd/dist/antd.css";
import Header from "./Components/Layout/Header";
import CustomLayout from "./Components/Layout/CustomLayout";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  .ant-menu-submenu-popup{
    .ant-menu-sub{

    background: ${(p) => p.theme["main-background-color"]} !important;
    color: ${(p) => p.theme["text-color"]} !important;
    }
    .ant-menu-item:not(.ant-menu-item-selected):hover .ant-menu-title-content{
      color: ${(p) => p.theme.primary};
    }
    .ant-menu-item-selected{
      background: ${(p) => p.theme["active-menu-item-bg"]} !important;
      color: ${(p) => p.theme["active-menu-item-text"]}!important;
    }
    
  }
`;

export const lightTheme = {
   "sun-color": "#f95192",
   primary: "#f95192",
   "moon-color": "#222",
   "slash-color": "#222",
   "background-color": "#faf9fa",
   "text-color": "#222",
   "main-background-color": "#fff",
   "main-text-color": "rgba(0,0,0,0.85)",
   "main-border-color": "#f0f0f0",
   "red-button-bg-color": "#fdeaf1",
   "red-button-text-color": "#f95997",
   "network-button-bg-color": "#f3f3f4",
   "empty-text-color": "rgba(0,0,0,0.25)",
   "divider-border": "1px solid #f0f0f0",
   "divider-color": "#f0f0f0",
   "fade-text-color": "rgba(0,0,0,0.45)",
   "placeholder-text-color": "rgba(54,54,54,0.3)",
   "input-border": "1px solid #d9d9d9",
   "default-btn-text-color": "#555",
   "default-btn-bg-color": "#fff",
   "default-btn-border": "1px solid #d9d9d9",
   "alert-info-bg-color": "#fff0f3",
   "alert-info-border": "1px solid #ffcfdc",
   "alert-warning-bg-color": "#fffbe6",
   "alert-warning-border": "1px solid #ffe799",
   "alert-warning-text-color": "#222",
   "progress-bg-color": "#f5f5f5",
   "clock-text-color": "#222",
   "disabled-bg": "rgba(0,0,0,0.1)",
   "disabled-text-color": "rgba(0,0,0,0.3)",
   "active-menu-item-bg": "#fff0f3",
   "active-menu-item-text": "#f95192",
   "alert-success-bg-color": "#ebf8f2",
   "alert-success-border": "1px solid #e1f5eb",
   "alert-success-text-color": "#5e6461",
};

const darkTheme = {
   "moon-color": "#f95192",
   primary: "#f95192",
   "sun-color": "#c9c8c5",
   "slash-color": "#c9c8c5",
   "background-color": "#1e2122",
   "text-color": "#c9c8c5",
   "main-background-color": "#242525",
   "main-text-color": "#c9c8c5",
   "main-border-color": "#242525",
   "red-button-bg-color": "#3b0619",
   "red-button-text-color": "#e84d89",
   "network-button-bg-color": "#1e2122",
   "empty-text-color": "#c9c8c5",
   "divider-border": "1px solid rgba(0,0,0,0.6)",
   "divider-color": "rgba(0,0,0,0.6)",
   "fade-text-color": "#c9c8c5",
   "placeholder-text-color": "rgba(198,193,185,0.3)",
   "input-border": "1px solid #383d3f",
   "default-btn-text-color": "#919aa3",
   "default-btn-bg-color": "#000",
   "default-btn-border": "1px solid #2a2e30",
   "alert-info-bg-color": "#000",
   "alert-info-border": "1px solid #f95192",
   "alert-warning-bg-color": "#242525",
   "alert-warning-border": "1px solid #ffd448",
   "alert-warning-text-color": "#ffd448",
   "progress-bg-color": "rgba(0,0,0,0.6)",
   "clock-text-color": "#e84d89",
   "disabled-bg": "rgba(0,0,0,0.3)",
   "disabled-text-color": "hsla(0,0%,100%,0.6)",
   "active-menu-item-bg": "#f95192",
   "active-menu-item-text": "#feeaf1",
   "alert-success-bg-color": "#113227",
   "alert-success-border": "1px solid #1e5b3d",
   "alert-success-text-color": "#abb4ae",
};

function App() {
   const theme = useSelector((state: RootState) => state.global.theme);
   return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
         {" "}
         <GlobalStyles></GlobalStyles>
         <CustomLayout></CustomLayout>
      </ThemeProvider>
   );
}

export default App;
