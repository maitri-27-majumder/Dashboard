import { Progress } from "antd";
import React from "react";

const ProgressCard = () => {
  return (
    <div>
      <div>Email sent</div>
      <Progress
        type="circle"
        percent={73}
        strokeColor={"#4338CA"}
        format={(percent) => {
          return (
            <div>
              <div>{percent}%</div>
              <div>Opened</div>
            </div>
          );
        }}
      />
      <div>
        <div>Performance</div>
        <div>Average</div>
      </div>
    </div>
  );
};

export default ProgressCard;
