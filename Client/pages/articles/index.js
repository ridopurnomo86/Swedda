import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import Head from "next/head";
// import nookies from "nookies";
import ArticleContainer from "./styles";

const HeroSection = dynamic(() => import("./HeroSection"));
const ListSection = dynamic(() => import("./ListSection"));

const Articles = ({ data }) => (
    <>
        <Head>
            <title>Articles</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ArticleContainer>
            <HeroSection />
            <ListSection articles={data} />
        </ArticleContainer>
    </>
);
export default Articles;

Articles.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEWS_API_URL}top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`);
    const { articles } = await res.json();

    return {
        props: {
            data: articles ? articles : null,
        },
    };
}
