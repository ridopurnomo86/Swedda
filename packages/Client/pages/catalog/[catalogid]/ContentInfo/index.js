/* eslint-disable react/jsx-key */
import React from "react";
import PropTypes from "prop-types";
import { ContentInfoContainer } from "./styles";
import Campaign from "./Campaign";
import Comment from "./Comment";

const ContentInfo = ({
    activeIndexComp,
    campaignTextContent,
    campaignDescription,
    comments,
    catalogid,
}) => {
    const Template = [
        <Campaign textContent={campaignTextContent} description={campaignDescription} />,
        <Comment infoComments={comments} catalogid={catalogid} />,
    ];
    return <ContentInfoContainer>{Template[activeIndexComp]}</ContentInfoContainer>;
};

export default ContentInfo;

ContentInfo.propTypes = {
    activeIndexComp: PropTypes.number,
    campaignTextContent: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.object),
    catalogid: PropTypes.string,
    campaignDescription: PropTypes.string,
};

ContentInfo.defaultProps = {
    activeIndexComp: undefined,
    campaignTextContent: "",
    comments: undefined,
    catalogid: "",
    campaignDescription: "",
};
