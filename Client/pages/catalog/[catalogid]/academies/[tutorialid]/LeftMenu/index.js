import React from "react";
import STUDY_PREPERATION from "../Static/Accountant";
import { LeftMenuContainer } from "./styles";
import Accordion from "../components/Accordion";

const LeftMenu = () => (
    <LeftMenuContainer>
        {STUDY_PREPERATION.map((info) => (
            <Accordion text={info.name} key={info.id} data={info.content} />
        ))}
    </LeftMenuContainer>
);

export default LeftMenu;
