import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import HeadTemplate from "@components/Head";
import ArticleContainer from "./styles";

const HeroSection = dynamic(() => import("./HeroSection"));
const ListSection = dynamic(() => import("./ListSection"));

export { getStaticProps } from "./helpers";

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
