import React, { useEffect, useState } from "react";

import ProjectIcon from "../../assets/dashboard/ProjectIcon";
import CRMIcon from "../../assets/dashboard/CRMIcon";
import SalesIcon from "../../assets/dashboard/SalesIcon";
import CryptoIcon from "../../assets/dashboard/CryptoIcon";
import KnowledgeIcon from "../../assets/dashboard/KnowledgeIcon";
import AccountIcon from "../../assets/dashboard/AccountIcon";
import WelcomeIcon from "../../assets/dashboard/WelcomeIcon";
import AccessIcon from "../../assets/dashboard/AccessIcon";
import { DownOutlined, LeftOutlined } from "@ant-design/icons";
import siteLogo from "../../assets/header/SiteLogo.png";

const appsList = [
  { icon: <ProjectIcon />, name: "Project" },
  { icon: <CRMIcon />, name: "CRM" },
  { icon: <SalesIcon />, name: "Sales" },
  { icon: <CryptoIcon />, name: "Crypto" },
  { icon: <KnowledgeIcon />, name: "Knowledge Base" },
  { icon: <AccountIcon />, name: "Account" },
];

const pagesList = [
  { icon: <WelcomeIcon />, name: "Welcome" },
  { icon: <AccessIcon />, name: "Access Denied" },
];
const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);

  return (
    <>
      <div
        className={`nav__wrapper ${
          width <= 1280 && isCollapsed ? "nav__hidden" : ""
        }`}
      >
        <nav className="nav__container">
          <div className="nav__title">
            <img src={siteLogo} />
            <span>YOUR SITE</span>
            {width <= 1280 && <div className="nav__collapse" onClick={() => setIsCollapsed(true)}>
              <LeftOutlined />
            </div>}
          </div>

          <div className="nav__menu" id="nav-menu">
            <div> App</div>
            <ul className="nav__list">
              {appsList.map((item, index) => (
                <li key={`apps-list-${index}`}>
                  <div>
                    <div>{item.icon}</div>
                    <div>{item.name}</div>
                  </div>
                  <DownOutlined />
                </li>
              ))}
            </ul>
            <div>Pages</div>
            <ul className="nav__list">
              {pagesList.map((item, index) => (
                <li key={`pages-list-${index}`}>
                  <div>
                    <div>{item.icon}</div>
                    <div>{item.name}</div>
                  </div>
                  <DownOutlined />
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
