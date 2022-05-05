import React from "react";
import dynamic from "next/dynamic";
import { DashboardContainer, GridContainer } from "./styles";

const Activity = dynamic(() => import("./Activity"));
const Banner = dynamic(() => import("./Banner"));
const OtherActivity = dynamic(() => import("./OtherActivity"));

const Dashboard = () => (
    <DashboardContainer>
        <Banner name="Guest" />
        <GridContainer>
            <Activity />
            <OtherActivity />
        </GridContainer>
    </DashboardContainer>
);

export default Dashboard;
