import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import dynamic from "next/dynamic";
import nookies from "nookies";

const Dashboard = dynamic(() => import("./homepage/Dashboard"));
const StaticPage = dynamic(() => import("./homepage/StaticPage"), {
    ssr: true,
});

const Homepage = ({ token }) =>
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
            <StaticPage />
        </>
    );

export async function getServerSideProps(context) {
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

    return {
        props: {
            token: token ? token : null,
        },
    };
}

export default Homepage;

Homepage.propTypes = {
    token: PropTypes.string,
};

Homepage.defaultProps = {
    token: null,
};
