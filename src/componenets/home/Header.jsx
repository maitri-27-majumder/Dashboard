import React from "react";
import siteLogo from "../../assets/header/SiteLogo.png";

const Header = () => {
  return (
    <div>
      <div className="mainheader__left">
        <img className="sitelogo" src={siteLogo} />
        <div>Your Site</div>
      </div>

      <div className="mainheader__middle">
        <div>About</div>
        <div>How it works</div>
        <div>Pricing</div>
      </div>
      <div className="mainheader__right">
        <button>Login/Signup</button>
      </div>
    </div>
  );
};

export default Header;
