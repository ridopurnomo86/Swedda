import React from "react";
import dynamic from "next/dynamic";
import HeadTemplate from "@components/Head";
import { DashboardContainer, GridContainer } from "./styles";
import { getUserToken } from "../../lib/dashboard";

const Activity = dynamic(() => import("./Activity"));
const Banner = dynamic(() => import("./Banner"));
const OtherActivity = dynamic(() => import("./OtherActivity"));

export async function getServerSideProps(context) {
    const token = await getUserToken(context);

    if (!token) {
        return {
            redirect: {
                destination: "/signin",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

const Dashboard = () => (
    <>
        <HeadTemplate title="Dashboard" />
        <DashboardContainer>
            <Banner name="Guest" />
            <GridContainer>
                <Activity />
                <OtherActivity />
            </GridContainer>
        </DashboardContainer>
    </>
);

export default Dashboard;
