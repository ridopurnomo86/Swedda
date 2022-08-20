import React from "react";
import PropTypes from "prop-types";
import HeadTemplate from "components/Head";
import { getArticles } from "lib/articles";
import ArticlesViews from "views/articles";

export async function getStaticProps() {
    const articles = await getArticles();

    return {
        props: {
            data: articles ? articles : null,
        },
    };
}

const Articles = ({ data }) => (
    <>
        <HeadTemplate title="Articles" />
        <ArticlesViews data={data} />
    </>
);
export default Articles;

Articles.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
