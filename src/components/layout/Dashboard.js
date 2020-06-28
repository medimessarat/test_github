import React from "react";
import Clients from "../clients/Clients";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="row">
      <div className="col col-sm-8 col-md-10">
        <Clients />
      </div>
      <div className="col col-sm-4 col-md-2">
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
