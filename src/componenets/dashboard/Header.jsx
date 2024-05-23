import {
  BellOutlined,
  MenuOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import USAIcon from "../../assets/dashboard/USAIcon.png";
import avatar from "../../assets/avatar/caroline.png";

const Header = ({ setIsCollapsed }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  return (
    <div className="header__wrapper">
      <div className="header__left-item">
        {width <= 1280 && (
          <MenuOutlined onClick={() => setIsCollapsed(false)} />
        )}
        <SearchOutlined />
      </div>

      <div className="header__right-item">
        <img src={USAIcon} />
        <div className="header__notification">
          <BellOutlined />
          <div></div>
        </div>
        <SettingOutlined />
        <div className="header__avatar-wrapper">
          <img className="header__avatar" src={avatar} />
          <div className="header__avatar-details">
            <div>Admin</div>
            <div>Carolyn Perkins</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
