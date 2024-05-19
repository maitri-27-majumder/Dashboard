import React from "react";
import robotImg from "../../assets/landingPage/RobotIcon.png";
import MeetingIcon from "../../assets/landingPage/MeetingIcon";

const Body = () => {
  return (
    <div className="landing__body-wrapper">
      <div className="landing__body-content">
        <div className="landing__body-appointment">
          <MeetingIcon />
          Book a 30
          <br /> minutes meeting <br />
          with us
        </div>
        <div className="landing__body-circle">
          <img src={robotImg} />
          <div>Automate your pre-sales</div>
          <div>
            <span>
              Recently received{" "}
              <a href="https://finance.yahoo.com/news/vodex-powers-2-million-seed-142500440.html">
                $2 million
              </a>
            </span>{" "}
            in seed funding
          </div>
          <div className="landing__btn">START A CONVERSATION</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
