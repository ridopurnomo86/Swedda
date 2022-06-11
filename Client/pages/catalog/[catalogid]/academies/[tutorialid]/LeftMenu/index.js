import React from "react";
import STATIC_DATA from "../Static/static-data";
import { LeftMenuContainer } from "./styles";
import Accordion from "../components/Accordion";

const LeftMenu = () => (
    <LeftMenuContainer>
        <Accordion text="Study Preparation" data={STATIC_DATA} />
    </LeftMenuContainer>
);

export default LeftMenu;
