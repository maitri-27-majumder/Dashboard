import React from "react";
import siteLogo from "../../assets/header/SiteLogo.png";
import { MenuOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";

const Header = () => {
  return (
    <div className="landing__header">
      <div className="landing__header-left">
        <img className="sitelogo" src={siteLogo} />
        <div>Your Site</div>
      </div>

      <div className="landing__header-middle">
        <div>About</div>
        <div>How it works</div>
        <div>Pricing</div>
      </div>
      <div className="landing__header-right landing__btn">
        <div>Login / Signup</div>
      </div>
      {/* <div className="landing__dropdown"> */}
      <Dropdown
        className="landing__dropdown"
        dropdownRender={() => (
          <div className="landing__dropdown-container">
            <div className="landing__header-middle">
              <div>About</div>
              <div>How it works</div>
              <div>Pricing</div>
            </div>
            <div className="landing__header-right landing__btn">
              <div>Login / Signup</div>
            </div>
          </div>
        )}
      >
        <MenuOutlined />
      </Dropdown>
    </div>
    // </div>
  );
};

export default Header;
