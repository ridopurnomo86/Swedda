import React from "react";
import PropTypes from "prop-types";
import {
    CardActivityContainer,
    ContentContainer,
    EllipsisIcon,
    SubtitleText,
    TitleText,
} from "./styles";

const CardActivity = ({ status, title }) => (
    <CardActivityContainer>
        <ContentContainer>
            <SubtitleText>{status}</SubtitleText>
            <TitleText>{title}</TitleText>
        </ContentContainer>
        <EllipsisIcon />
    </CardActivityContainer>
);

export default CardActivity;

CardActivity.propTypes = {
    status: PropTypes.string,
    title: PropTypes.string,
};

CardActivity.defaultProps = {
    status: "",
    title: "",
};
