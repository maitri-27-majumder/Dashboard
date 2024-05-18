import {
  AlignLeftOutlined,
  BellOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import React from "react";
import UsaIcon from "../../assets/header/UsaIcon";
import avatar from "../../assets/avatar/caroline.png";

const Header = () => {
  return (
    <div>
      <div className="header__left-item">
        <AlignLeftOutlined />
        <SearchOutlined />
      </div>

      <div className="header__right-item">
        <UsaIcon />
        <div>
          <BellOutlined />
          <div></div>
        </div>
        <SettingOutlined />
        <div>
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
