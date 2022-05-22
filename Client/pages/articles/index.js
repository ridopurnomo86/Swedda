import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import HeadTemplate from "@components/Head";
import ArticleContainer from "./styles";
import { getArticles } from "../../lib/articles";

const HeroSection = dynamic(() => import("./HeroSection"));
const ListSection = dynamic(() => import("./ListSection"));

const Articles = ({ data }) => (
    <>
        <HeadTemplate title="Articles" />
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

export async function getStaticProps() {
    const articles = await getArticles();

    return {
        props: {
            data: articles ? articles : null,
        },
    };
}
