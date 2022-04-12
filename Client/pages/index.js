import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import dynamic from "next/dynamic";
import nookies from "nookies";

const Dashboard = dynamic(() => import("./homepage/Dashboard"), {
    ssr: true,
});
const StaticPage = dynamic(() => import("./homepage/StaticPage"), {
    ssr: true,
});

const Homepage = ({ token, data }) =>
    token ? (
        <>
            <Head>
                <title>Dashboard</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Dashboard />
        </>
    ) : (
        <>
            <Head>
                <title>Swedda</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <StaticPage data={data} />
        </>
    );

Homepage.propTypes = {
    token: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Homepage.defaultProps = {
    token: null,
};

export default Homepage;

export async function getServerSideProps(context) {
    // Auth
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];

    // if (!token) {
    //     return {
    //         redirect: {
    //             destination: "/signin",
    //             permanent: false,
    //         },
    //     };
    // }

    // Catalog
    const res = await fetch(`${process.env.BACKEND_URL}/catalog`);
    const { data } = await res.json();

    return {
        props: {
            token: token ? token : null,
            data: data ? data : null,
        },
    };
}
