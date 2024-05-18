import React from "react";
import Sidebar from "../componenets/dashboard/Sidebar";
import Header from "../componenets/dashboard/Header";
import OverviewCard from "../componenets/dashboard/OverviewCard";

import ChartCard from "../componenets/dashboard/ChartCard";
import ProgressCard from "../componenets/dashboard/ProgressCard";
import ButtonCard from "../componenets/dashboard/ButtonCard";
import LeadsCard from "../componenets/dashboard/LeadsCard";
import Footer from "../componenets/dashboard/Footer";


const Dashboard = () => {
  return (
    <div className="dashboard__wrapper">
      <Sidebar />
      <div className="dashboard__content">
        <Header />
        <OverviewCard />
        <div className="dashboard__charts">
          <ChartCard />
          <ProgressCard />
        </div>
        <ButtonCard />
        <LeadsCard />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
