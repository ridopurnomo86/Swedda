import React from "react";
import PropTypes from "prop-types";
// import DOMPurify from "dompurify";
import DOMPurify from "isomorphic-dompurify";
import { DescriptionContainer, Title } from "./styles";

const Description = ({ html }) => (
    <DescriptionContainer>
        <Title>Description</Title>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
    </DescriptionContainer>
);

export default Description;

Description.propTypes = {
    html: PropTypes.string,
};

Description.defaultProps = {
    html: "",
};
