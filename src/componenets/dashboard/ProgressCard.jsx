import { Progress } from "antd";
import React from "react";

const ProgressCard = () => {
  return (
    <div className="progress__wrapper">
      <div>Email sent</div>
      <div>
        <Progress
          type="circle"
          percent={73}
          strokeColor={"#4338CA"}
          size={200}
          format={(percent) => {
            return (
              <div className="progress__bar-text">
                <div>{percent}%</div>
                <div>Opened</div>
              </div>
            );
          }}
        />
        <div className="progress__text">
          <div>Performance</div>
          <div>Average</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
