import React from "react";
import PropTypes from "prop-types";
import { CampaignContainer } from "./styles";
import StudyTools from "./StudyTools";
import Summary from "./Summary";

const Campaign = ({ textContent, description }) => (
    <CampaignContainer>
        <Summary textContent={textContent} description={description} />
        <StudyTools />
    </CampaignContainer>
);

export default Campaign;

Campaign.propTypes = {
    textContent: PropTypes.string,
    description: PropTypes.string,
};

Campaign.defaultProps = {
    textContent: "",
    description: "",
};
