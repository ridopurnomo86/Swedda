import React from "react";
import Head from "next/head";
import nookies from "nookies";
import ArticleContainer from "./styles";
import HeroSection from "./HeroSection";
import ListSection from "./ListSection";

const Articles = () => (
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

export async function getServerSideProps(context) {
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];
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

export default Articles;
