import React from "react";
import PropTypes from "prop-types";
import { TagContainer, Text } from "./styles";

const Tag = ({ text }) => (
    <TagContainer>
        <Text>{text}</Text>
    </TagContainer>
);

export default Tag;

Tag.propTypes = {
    text: PropTypes.string,
};

Tag.defaultProps = {
    text: "",
};
