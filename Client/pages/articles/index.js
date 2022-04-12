import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
// import nookies from "nookies";
import ArticleContainer from "./styles";
import HeroSection from "./HeroSection";
import ListSection from "./ListSection";

const Articles = () => {
    return (
        <>
            <Head>
                <title>Articles</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ArticleContainer>
                <HeroSection />
                <ListSection />
            </ArticleContainer>
        </>
    );
};
export default Articles;

Articles.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getServerSideProps() {
    // const cookie = nookies.get(context);
    // const token = cookie[`${process.env.COOKIE_USER}`];

    // if (!token) {
    //     return {
    //         redirect: {
    //             destination: "/signin",
    //             permanent: false,
    //         },
    //     };
    // }

    return {
        props: {},
    };
}
