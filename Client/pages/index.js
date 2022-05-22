import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { loadCatalog, getUserToken } from "../lib/homepage";
import HeadTemplate from "@components/Head";

const StaticPage = dynamic(() => import("./homepage/StaticPage"));

export async function getServerSideProps(context) {
    const data = await loadCatalog();
    const token = await getUserToken(context);

    if (token) {
        return {
            redirect: {
                destination: "/dashboard",
                permanent: false,
            },
        };
    }

    return {
        props: {
            data: data ? data : null,
        },
    };
}

const HomePage = ({ data }) => (
    <>
        <HeadTemplate title="Swedda" />
        <StaticPage data={data} />
    </>
);

HomePage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HomePage;
