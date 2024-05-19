import React from "react";
import mobileImg from "../assets/homepage/mobile.png";
import robotImg from "../assets/homepage/mobileimg.png";
import speechIng from "../assets/homepage/voice.png";
import { Input } from "antd";
import siteLogo from "../assets/header/SiteLogo.png";

const Homepage = () => {
  return (
    <div className="home__wrapper">
      <div className="home__logo">
        <img className="sitelogo" src={siteLogo} />
        <div>Your Site</div>
      </div>
      <div className="home__overview">
        Get 2x Revenue With <span>Gen A.I. Powered</span>
        <br />
        <span> Sales Agent</span> To Your Customers
      </div>
      <div className="home__tag-line">
        Connect with 10,000 customers in 1 hour with real-time data insights,
        revolutionizing business
        <br />
        outreach with AI-human synergy.
      </div>
      <div className="home__action-btn">
        <div className="home__btn">VISIT OUR WEBSITE</div>
        <div className="home__btn">BOOK A MEETING</div>
      </div>
      <div className="home__content">
        <div>Sales</div>
        <div className="home__content-img">
          <img src={mobileImg} />

          <div className="home__content-img-form">
            <img src={robotImg} />
            <img src={speechIng} />
            <div>
              Talk to our voicebot
              <form>
                <Input placeholder="Full Name" />
                <Input placeholder="Email" />
                <Input placeholder="Email" />
              </form>
              <div className="home__btn">REQUEST A CALL BACK</div>
            </div>
          </div>
        </div>
        <div>Agent</div>
      </div>
    </div>
  );
};

export default Homepage;
