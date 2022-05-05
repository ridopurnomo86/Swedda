import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import {
    CardArticleContainer,
    ContentInfo,
    TitleText,
    ActionInfo,
    Image,
    DateText,
    ViewMoreText,
    ViewMoreWrapper,
    DescriptionText,
} from "./styles";

const CardArticle = ({ imgSrc, title, url, date, desc }) => (
    <CardArticleContainer>
        <div>
            <Image src={imgSrc} alt={imgSrc} />
            <ContentInfo>
                <TitleText>{title}</TitleText>
                <DescriptionText>{desc}</DescriptionText>
            </ContentInfo>
        </div>
        <ActionInfo>
            <DateText>{dayjs(date).format("YYYY MMM, hh:mm a")}</DateText>
            <Link href={url} replace>
                <ViewMoreWrapper>
                    <ViewMoreText>View More</ViewMoreText>
                    <i className="fa fa-eye grey"></i>
                </ViewMoreWrapper>
            </Link>
        </ActionInfo>
    </CardArticleContainer>
);

export default React.memo(CardArticle, () => true);

CardArticle.propTypes = {
    imgSrc: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    url: PropTypes.string,
    date: PropTypes.string,
    desc: PropTypes.string,
};

CardArticle.defaultProps = {
    imgSrc: "",
    title: "",
    author: "",
    url: "",
    date: "",
    desc: "",
};
