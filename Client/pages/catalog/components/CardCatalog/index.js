import React from "react";
import PropTypes from "prop-types";
import Link from "next/dist/client/link";
import { CardCatalogContainer, SubtitleText, TitleText, TextContainer } from "./styles";

const CardCatalog = ({ imgUrl, title, subtitle, direction }) => (
    <Link href={`${direction}`} passHref as={`${direction}`}>
        <CardCatalogContainer source={imgUrl}>
            <TextContainer>
                <TitleText>{title}</TitleText>
                <SubtitleText>{subtitle}</SubtitleText>
            </TextContainer>
        </CardCatalogContainer>
    </Link>
);

export default CardCatalog;

CardCatalog.propTypes = {
    imgUrl: PropTypes.string,
    direction: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

CardCatalog.defaultProps = {
    imgUrl: "",
    direction: "",
    title: "",
    subtitle: "",
};
