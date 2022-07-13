import React from "react";
import PropTypes from "prop-types";
import { ListInfoContainer, Title, Text } from "./styles";

const ListInfo = ({ title, infoText, icon }) => (
    <ListInfoContainer>
        {icon}
        <Title>{title}</Title>
        <Text>{infoText}</Text>
    </ListInfoContainer>
);

export default ListInfo;

ListInfo.propTypes = {
    title: PropTypes.string,
    infoText: PropTypes.string,
    icon: PropTypes.element,
};

ListInfo.defaultProps = {
    icon: undefined,
    title: "",
    infoText: "",
};
