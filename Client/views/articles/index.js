import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import ArticleContainer from "./styles";

const HeroSection = dynamic(() => import("./HeroSection"));
const ListSection = dynamic(() => import("./ListSection"));

const Articles = ({ data }) => (
    <ArticleContainer>
        <HeroSection />
        <ListSection articles={data} />
    </ArticleContainer>
);
export default Articles;

Articles.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
