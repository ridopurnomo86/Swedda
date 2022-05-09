import React from "react";
import PropTypes from "prop-types";
import DOMPurify from "dompurify";
import { DescriptionContainer, Text, Title } from "./styles";

const Description = ({ html }) => (
    <DescriptionContainer>
        <Title>Description</Title>
        <Text dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
    </DescriptionContainer>
);

export default Description;

Description.propTypes = {
    html: PropTypes.string,
};

Description.defaultProps = {
    html: "",
};
