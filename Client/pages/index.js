import React from "react";
import PropTypes from "prop-types";
import { loadCatalog, getUserToken } from "../lib/homepage";
import HeadTemplate from "components/Head";
import LandingPageViews from "views/landing";

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

const LandingPage = ({ data }) => (
    <>
        <HeadTemplate title="Swedda" />
        <LandingPageViews data={data} />
    </>
);

LandingPage.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LandingPage;
