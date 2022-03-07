import React from "react";
import PropTypes from "prop-types";
import { CampaignContainer, TextContent, Title } from "./styles";

const Campaign = ({ textContent }) => (
    <CampaignContainer>
        <Title>Summary</Title>
        <TextContent>{textContent}</TextContent>
    </CampaignContainer>
);

export default Campaign;

Campaign.propTypes = {
    textContent: PropTypes.string,
};

Campaign.defaultProps = {
    textContent: "",
};
