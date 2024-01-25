import React from "react";
import scss from './Layout.module.scss'
import HeaderPage from "./header/HeaderPage";
import MainPage from "./main/MainPage";
import FooterPage from "./footer/FooterPage";

const LayoutPage = () => {
  return (
    <div className={scss.layout}>
      <HeaderPage/>
      <MainPage/>
      <FooterPage/>
    </div>
  );
};
export default LayoutPage;