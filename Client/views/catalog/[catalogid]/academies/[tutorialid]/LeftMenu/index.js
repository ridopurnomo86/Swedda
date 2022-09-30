import React from "react";
import PropTypes from "prop-types";
import Static from "static/academies/tutorial/index";
import { LeftMenuContainer } from "./styles";
import Accordion from "../components/Accordion";

const LeftMenu = ({ catalogid }) => (
    <LeftMenuContainer>
        {Static[catalogid].map((info) => (
            <Accordion text={info.name} key={info.id} data={info.content} />
        ))}
    </LeftMenuContainer>
);

export default LeftMenu;

LeftMenu.propTypes = {
    catalogid: PropTypes.string.isRequired,
};
