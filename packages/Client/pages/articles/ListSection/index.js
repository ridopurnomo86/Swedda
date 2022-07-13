import React from "react";
import PropTypes from "prop-types";
import CardArticle from "./CardArticle";
import { ListSectionContainer, TitleHero, SubTitle, CardDisplay } from "./styles";

const ListSection = ({ articles }) => (
    <ListSectionContainer>
        <TitleHero>Articles</TitleHero>
        <SubTitle>
            Articles are an important piece of content that can draw inspiration from a story tied
            to a product or service. This is is a list of articles, can help you to take your
            business skill to next level and go deeper more about business.
        </SubTitle>
        <CardDisplay>
            {articles.map((article, key) => (
                <CardArticle
                    key={key}
                    imgSrc={article?.urlToImage}
                    title={article?.title}
                    url={article?.url}
                    date={article?.publishedAt}
                    desc={article?.description}
                />
            ))}
        </CardDisplay>
    </ListSectionContainer>
);

export default ListSection;

ListSection.propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object),
};

ListSection.defaultProps = {
    articles: undefined,
};
