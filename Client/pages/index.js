import React from "react";
import PropTypes from "prop-types";
import { loadCatalog } from "lib/homepage";
import HeadTemplate from "components/Head";
import LandingPageViews from "views/landing";

export async function getServerSideProps() {
    const data = await loadCatalog();

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
