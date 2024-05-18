import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import ProjectIcon from "../../assets/dashboard/ProjectIcon";
import CRMIcon from "../../assets/dashboard/CRMIcon";
import SalesIcon from "../../assets/dashboard/SalesIcon";
import CryptoIcon from "../../assets/dashboard/CryptoIcon";
import KnowledgeIcon from "../../assets/dashboard/KnowledgeIcon";
import AccountIcon from "../../assets/dashboard/AccountIcon";
import WelcomeIcon from "../../assets/dashboard/WelcomeIcon";
import AccessIcon from "../../assets/dashboard/AccessIcon";
import { DownOutlined } from "@ant-design/icons";
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
const Sidebar = () => {
  return (
    <>
      <div className="nav__wrapper">
        <nav className="nav__container">
          <div className="nav__title">
            <img src={siteLogo} />
            YOUR SITE
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
