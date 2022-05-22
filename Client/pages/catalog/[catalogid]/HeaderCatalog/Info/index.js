import React from "react";
import PropTypes from "prop-types";
import Tag from "@components/Tag";
import { InfoContainer, Title, Subtitle } from "./styles";

const Info = ({ infoCatalog }) => (
    <InfoContainer>
        <Title>{infoCatalog.title}</Title>
        {infoCatalog.tag.map((info, key) => (
            <Tag text={info} key={key} />
        ))}
        <Subtitle>
            The complete curriculum was compiled by Swedda together with Harapan University Medan
            and other industry players. Students are prepared to become Sales Management according
            to industry needs.
        </Subtitle>
    </InfoContainer>
);

export default Info;

Info.propTypes = {
    infoCatalog: PropTypes.objectOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
    ).isRequired,
};
