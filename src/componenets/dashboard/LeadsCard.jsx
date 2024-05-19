import React from "react";
import carolineImg from "../../assets/avatar/caroline.png";
import emilyImg from "../../assets/avatar/emily.png";
import williumImg from "../../assets/avatar/willium.png";
import johnImg from "../../assets/avatar/john.png";
import janeImg from "../../assets/avatar/jane.png";

const entries = [
  {
    avatar: <img src={carolineImg} />,
    name: "Carolyn Perkins",
    status: "New",
    email: "eileen_h@hotmail.com",
    createdTime: "12/06/2021 12:53",
    assignee: "Carrie Harris",
  },
  {
    avatar: <img src={johnImg} />,
    name: "John Doe",
    status: "Sold",
    email: "john.doe@example.com",
    createdTime: "03/15/2023 08:30",
    assignee: "Nancy Wright",
  },

  {
    avatar: <img src={janeImg} />,
    name: "Jane Smith",
    status: "Sold",
    email: "jane_smith@outlook.com",
    createdTime: "07/22/2022 14:45",
    assignee: "Mike Johnson",
  },

  {
    avatar: <img src={emilyImg} />,
    name: "Emily Clark",
    status: "Not Interested",
    email: "emily_clark@gmail.com",
    createdTime: "05/30/2023 17:25",
    assignee: "David Martinez",
  },
  {
    avatar: <img src={williumImg} />,
    name: "Willium Taylor",
    status: "In Progress",
    email: "william.t@domain.com",
    createdTime: "01/17/2022 11:05",
    assignee: "Rachel Lee",
  },
];
const LeadsCard = () => {
  return (
    <div className="leads__wrapper">
      <div className="leads__header">
        <div>Leads</div>
        <div>View All Leads</div>
      </div>
      <div className="leads__table">
        <div className="leads__table-header">
          <div>NAME</div>
          <div>STATUS</div>
          <div>EMAIL</div>
          <div>CREATED TIME</div>
          <div>ASSIGNEE</div>
        </div>
        <div className="leads__entries">
          {entries.map((item, index) => (
            <div key={`leads-entries-${index}`} className="leads__entries-item">
              <div>
                <div>{item.avatar}</div>
                <div>{item.name}</div>
              </div>
              <div>
                <span
                  className={`leads__entries-item-status ${item.status
                    .replace(" ", "")
                    .toLowerCase()}`}
                >
                  {item.status}
                </span>
              </div>
              <div>{item.email}</div>
              <div>{item.createdTime}</div>
              <div>{item.assignee}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsCard;
