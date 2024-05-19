import {
  AlignLeftOutlined,
  BellOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import USAIcon from "../../assets/dashboard/USAIcon.png";
import avatar from "../../assets/avatar/caroline.png";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header__left-item">
        <AlignLeftOutlined />
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
