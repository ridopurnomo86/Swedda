import React from "react";
import HeadTemplate from "components/Head";
import DashboardViews from "views/dashboard";

const Dashboard = () => (
    <>
        <HeadTemplate title="Dashboard" />
        <DashboardViews />
    </>
);

export default Dashboard;
