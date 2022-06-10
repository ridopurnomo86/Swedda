import React from "react";
import STATIC_DATA from "../static-data";
import { LeftMenuContainer } from "./styles";
import Accordion from "../components/Accordion";

const LeftMenu = () => (
    <LeftMenuContainer>
        <Accordion text="Persiapan Belajar" data={STATIC_DATA} />
    </LeftMenuContainer>
);

export default LeftMenu;
