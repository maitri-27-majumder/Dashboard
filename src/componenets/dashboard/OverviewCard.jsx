import React from "react";
import GrowthIcon from "../../assets/dashboard/GrowthIcon";
import EmailIcon from "../../assets/dashboard/EmailIcon";
import FileIcon from "../../assets/dashboard/FileIcon";
import StrokeIcon from "../../assets/dashboard/StrokeIcon";
import CalenderIcon from "../../assets/dashboard/CalenderIcon";
import UserIcon from "../../assets/dashboard/UserIcon";

const cardItem = [
  {
    icon: <UserIcon />,
    name: "New Leads",
    number: 63,
    percentage: "+2.6",
  },
  {
    icon: <EmailIcon />,
    name: "Email",
    number: 25,
    percentage: "+5.5",
  },
  {
    icon: <FileIcon />,
    name: "Proposal",
    number: 49,
    percentage: "-0.7",
  },
  {
    icon: <CalenderIcon />,
    name: "Appointment",
    number: 12,
    percentage: "+2.6",
  },
];
const OverviewCard = () => {
  return (
    <div className="overview__wrapper">
      {cardItem.map((item, index) => (
        <div
          className={`overview__item item-${item.name
            .replace(" ", "")
            .toLowerCase()}`}
          key={`overview-card-${index}`}
        >
          <div>{item.icon}</div>
          <div className="overview__item-data">
            <div>
              <div>{item.number}</div>
              <div>{item.name}</div>
            </div>
            <div>
              {Number(item.percentage) > 0 ? <GrowthIcon /> : <StrokeIcon />}
              <div
                className={`overview__item-percent ${
                  Number(item.percentage) > 0 ? "green" : "red"
                }`}
              >
                {item.percentage}
              </div>
              <div>this month</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCard;
