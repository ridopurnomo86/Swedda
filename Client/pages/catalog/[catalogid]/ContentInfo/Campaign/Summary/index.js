import React from "react";
import PropTypes from "prop-types";
import { SummaryContainer, SummaryContent, TextContent, Title } from "./styles";
import Description from "./Description";

const Summary = ({ textContent, description }) => (
    <SummaryContainer>
        <SummaryContent>
            <Title>Summary</Title>
            <TextContent>{textContent}</TextContent>
        </SummaryContent>
        <Description html={description} />
    </SummaryContainer>
);

export default Summary;

Summary.propTypes = {
    textContent: PropTypes.string,
    description: PropTypes.string,
};

Summary.defaultProps = {
    textContent: "",
    description: "",
};
